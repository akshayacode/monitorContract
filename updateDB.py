from web3 import Web3
import json
import sqlite3
import time

# Connect to the Ethereum node
web3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8545'))

# Contract ABI and address
contract_address = 'CONTRACT_ADDRESS'
with open('DepositFundsABI.json', 'r') as abi_file:
    contract_abi = json.load(abi_file)

contract = web3.eth.contract(address=Web3.to_checksum_address(contract_address), abi=contract_abi)

# Connect to SQLite database
conn = sqlite3.connect('contract_events.db')
cursor = conn.cursor()

# Function to handle events
def handle_event(event):
    event_name = event.event
    block_number = event.blockNumber
    tx_hash = event.transactionHash.hex()
    user_address = None
    amount = None

    if event_name == "Deposit" or event_name == "Withdraw":
        user_address = event.args.user
        amount = str(event.args.amount)
    elif event_name == "Paused" or event_name == "Unpaused":
        user_address = event.args.account

    cursor.execute('''
        INSERT INTO events (event_name, block_number, tx_hash, user_address, amount) 
        VALUES (?, ?, ?, ?, ?)
    ''', (event_name, block_number, tx_hash, user_address, amount))

    conn.commit()

# Function to log events
def log_loop(event_filters, poll_interval):
    while True:
        for event_filter in event_filters:
            for event in event_filter.get_new_entries():
                handle_event(event)
        time.sleep(poll_interval)
# Set up event filters
deposit_filter = contract.events.Deposit.create_filter(fromBlock='latest')
withdraw_filter = contract.events.Withdraw.create_filter(fromBlock='latest')
paused_filter = contract.events.Paused.create_filter(fromBlock='latest')
unpaused_filter = contract.events.Unpaused.create_filter(fromBlock='latest')

# Start listening to events
log_loop([deposit_filter, withdraw_filter, paused_filter, unpaused_filter], 2)

# Close the database connection when done
conn.close()
