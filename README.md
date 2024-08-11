# Setup Instructions :

1. `git clone https://github.com/akshayacode/monitorContract`

2. Navigate to the directory and `npm install `

3. Start hardhat node - `npx hardhat node`

4. Deploy deposit funds contract

5. Configure your environment variables in the below structure

`HARDHAT_PRIVATE_KEY = "your local private key"`

`CONTRACT_ADDRESS = "contract address of deposit funds"`

`FINAL_PRIVATE_KEY= "your private key "`

`FROM_EMAIL="abc@gmail.com"`

`TO_EMAIL ="xyz@gmail.com"`

`EMAIL_PASSWORD="your app password"`

6. Run `python3 setupDB.py` to create Table which stores all the transaction informations

7. Run `node monitor.js` to send mail whenever suspicious transaction occurs (In separate terminal)

8. Run `node monitorMempool.js` to pause the contract on suspicious transaction(In separate terminal)

9. Run `python3 updateDB.py` (In separate terminal)

10. Now you can perform transactions in the deployed contract

Slither report is generated here https://github.com/akshayacode/monitorContract/blob/master/custom_slither_report.md
