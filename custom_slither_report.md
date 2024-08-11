## Detector Report

**Impact:** High
**Confidence:** Medium

Attacker.withdraw() (contracts/Attacker.sol#28-32) sends eth to arbitrary user
	Dangerous calls:
	- (sent,None) = msg.sender.call{value: address(this).balance}() (contracts/Attacker.sol#29)


### Elements:
- **Element:** withdraw
  - **File:** contracts/Attacker.sol
  - **Lines:** 28-32

- **Element:** (sent,None) = msg.sender.call{value: address(this).balance}()
  - **File:** contracts/Attacker.sol
  - **Lines:** 29-29


---
## Detector Report

**Impact:** High
**Confidence:** Medium

Attacker.attack() (contracts/Attacker.sol#22-26) sends eth to arbitrary user
	Dangerous calls:
	- depositFunds.deposit{value: 1000000000000000000}() (contracts/Attacker.sol#24)


### Elements:
- **Element:** attack
  - **File:** contracts/Attacker.sol
  - **Lines:** 22-26

- **Element:** depositFunds.deposit{value: 1000000000000000000}()
  - **File:** contracts/Attacker.sol
  - **Lines:** 24-24


---
## Detector Report

**Impact:** High
**Confidence:** Medium

Reentrancy in DepositFunds.withdraw() (contracts/DepositFunds.sol#23-32):
	External calls:
	- (sent,None) = msg.sender.call{value: bal}() (contracts/DepositFunds.sol#27)
	State variables written after the call(s):
	- balances[msg.sender] = 0 (contracts/DepositFunds.sol#28)
	DepositFunds.balances (contracts/DepositFunds.sol#11) can be used in cross function reentrancies:
	- DepositFunds.deposit() (contracts/DepositFunds.sol#18-21)
	- DepositFunds.getBalance() (contracts/DepositFunds.sol#34-36)
	- DepositFunds.withdraw() (contracts/DepositFunds.sol#23-32)


### Elements:
- **Element:** withdraw
  - **File:** contracts/DepositFunds.sol
  - **Lines:** 23-32

- **Element:** (sent,None) = msg.sender.call{value: bal}()
  - **File:** contracts/DepositFunds.sol
  - **Lines:** 27-27

- **Element:** balances[msg.sender] = 0
  - **File:** contracts/DepositFunds.sol
  - **Lines:** 28-28


---
## Detector Report

**Impact:** Low
**Confidence:** Medium

Lock.withdraw() (contracts/Lock.sol#23-33) uses timestamp for comparisons
	Dangerous comparisons:
	- require(bool,string)(block.timestamp >= unlockTime,You can't withdraw yet) (contracts/Lock.sol#27)


### Elements:
- **Element:** withdraw
  - **File:** contracts/Lock.sol
  - **Lines:** 23-33

- **Element:** require(bool,string)(block.timestamp >= unlockTime,You can't withdraw yet)
  - **File:** contracts/Lock.sol
  - **Lines:** 27-27


---
## Detector Report

**Impact:** Low
**Confidence:** Medium

Lock.constructor(uint256) (contracts/Lock.sol#13-21) uses timestamp for comparisons
	Dangerous comparisons:
	- require(bool,string)(block.timestamp < _unlockTime,Unlock time should be in the future) (contracts/Lock.sol#14-17)


### Elements:
- **Element:** constructor
  - **File:** contracts/Lock.sol
  - **Lines:** 13-21

- **Element:** require(bool,string)(block.timestamp < _unlockTime,Unlock time should be in the future)
  - **File:** contracts/Lock.sol
  - **Lines:** 14-17


---
## Detector Report

**Impact:** Informational
**Confidence:** High

PausableUpgradeable._getPausableStorage() (node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol#27-31) uses assembly
	- INLINE ASM (node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol#28-30)


### Elements:
- **Element:** _getPausableStorage
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol
  - **Lines:** 27-31

- **Element:** 
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol
  - **Lines:** 28-30


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Initializable._getInitializableStorage() (node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol#223-227) uses assembly
	- INLINE ASM (node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol#224-226)


### Elements:
- **Element:** _getInitializableStorage
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol
  - **Lines:** 223-227

- **Element:** 
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol
  - **Lines:** 224-226


---
## Detector Report

**Impact:** Informational
**Confidence:** High

OwnableUpgradeable._getOwnableStorage() (node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol#30-34) uses assembly
	- INLINE ASM (node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol#31-33)


### Elements:
- **Element:** _getOwnableStorage
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol
  - **Lines:** 30-34

- **Element:** 
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol
  - **Lines:** 31-33


---
## Detector Report

**Impact:** Informational
**Confidence:** High

4 different versions of Solidity are used:
	- Version constraint ^0.8.20 is used by:
		-^0.8.20 (node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol#4)
		-^0.8.20 (node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol#4)
		-^0.8.20 (node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol#4)
		-^0.8.20 (node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol#4)
	- Version constraint ^0.8.0 is used by:
		-^0.8.0 (contracts/Attacker.sol#2)
	- Version constraint ^0.8.19 is used by:
		-^0.8.19 (contracts/DepositFunds.sol#2)
	- Version constraint ^0.8.24 is used by:
		-^0.8.24 (contracts/Lock.sol#2)


### Elements:
- **Element:** ^0.8.20
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol
  - **Lines:** 4-4

- **Element:** ^0.8.20
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol
  - **Lines:** 4-4

- **Element:** ^0.8.20
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol
  - **Lines:** 4-4

- **Element:** ^0.8.20
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol
  - **Lines:** 4-4

- **Element:** ^0.8.0
  - **File:** contracts/Attacker.sol
  - **Lines:** 2-2

- **Element:** ^0.8.19
  - **File:** contracts/DepositFunds.sol
  - **Lines:** 2-2

- **Element:** ^0.8.24
  - **File:** contracts/Lock.sol
  - **Lines:** 2-2


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Version constraint ^0.8.24 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
.
It is used by:
	- ^0.8.24 (contracts/Lock.sol#2)


### Elements:
- **Element:** ^0.8.24
  - **File:** contracts/Lock.sol
  - **Lines:** 2-2


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Version constraint ^0.8.0 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- FullInlinerNonExpressionSplitArgumentEvaluationOrder
	- MissingSideEffectsOnSelectorAccess
	- AbiReencodingHeadOverflowWithStaticArrayCleanup
	- DirtyBytesArrayToStorage
	- DataLocationChangeInInternalOverride
	- NestedCalldataArrayAbiReencodingSizeValidation
	- SignedImmutables
	- ABIDecodeTwoDimensionalArrayMemory
	- KeccakCaching.
It is used by:
	- ^0.8.0 (contracts/Attacker.sol#2)


### Elements:
- **Element:** ^0.8.0
  - **File:** contracts/Attacker.sol
  - **Lines:** 2-2


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Version constraint ^0.8.19 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- VerbatimInvalidDeduplication
	- FullInlinerNonExpressionSplitArgumentEvaluationOrder
	- MissingSideEffectsOnSelectorAccess.
It is used by:
	- ^0.8.19 (contracts/DepositFunds.sol#2)


### Elements:
- **Element:** ^0.8.19
  - **File:** contracts/DepositFunds.sol
  - **Lines:** 2-2


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Version constraint ^0.8.20 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- VerbatimInvalidDeduplication
	- FullInlinerNonExpressionSplitArgumentEvaluationOrder
	- MissingSideEffectsOnSelectorAccess.
It is used by:
	- ^0.8.20 (node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol#4)
	- ^0.8.20 (node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol#4)
	- ^0.8.20 (node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol#4)
	- ^0.8.20 (node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol#4)


### Elements:
- **Element:** ^0.8.20
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol
  - **Lines:** 4-4

- **Element:** ^0.8.20
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol
  - **Lines:** 4-4

- **Element:** ^0.8.20
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol
  - **Lines:** 4-4

- **Element:** ^0.8.20
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol
  - **Lines:** 4-4


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Low level call in Attacker.withdraw() (contracts/Attacker.sol#28-32):
	- (sent,None) = msg.sender.call{value: address(this).balance}() (contracts/Attacker.sol#29)


### Elements:
- **Element:** withdraw
  - **File:** contracts/Attacker.sol
  - **Lines:** 28-32

- **Element:** (sent,None) = msg.sender.call{value: address(this).balance}()
  - **File:** contracts/Attacker.sol
  - **Lines:** 29-29


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Low level call in DepositFunds.withdraw() (contracts/DepositFunds.sol#23-32):
	- (sent,None) = msg.sender.call{value: bal}() (contracts/DepositFunds.sol#27)


### Elements:
- **Element:** withdraw
  - **File:** contracts/DepositFunds.sol
  - **Lines:** 23-32

- **Element:** (sent,None) = msg.sender.call{value: bal}()
  - **File:** contracts/DepositFunds.sol
  - **Lines:** 27-27


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Constant OwnableUpgradeable.OwnableStorageLocation (node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol#28) is not in UPPER_CASE_WITH_UNDERSCORES


### Elements:
- **Element:** OwnableStorageLocation
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol
  - **Lines:** 28-28


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Function OwnableUpgradeable.__Ownable_init(address) (node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol#51-53) is not in mixedCase


### Elements:
- **Element:** __Ownable_init
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol
  - **Lines:** 51-53


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Function OwnableUpgradeable.__Ownable_init_unchained(address) (node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol#55-60) is not in mixedCase


### Elements:
- **Element:** __Ownable_init_unchained
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol
  - **Lines:** 55-60


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Function ContextUpgradeable.__Context_init_unchained() (node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol#21-22) is not in mixedCase


### Elements:
- **Element:** __Context_init_unchained
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol
  - **Lines:** 21-22


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Function PausableUpgradeable.__Pausable_init() (node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol#56-58) is not in mixedCase


### Elements:
- **Element:** __Pausable_init
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol
  - **Lines:** 56-58


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Function ContextUpgradeable.__Context_init() (node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol#18-19) is not in mixedCase


### Elements:
- **Element:** __Context_init
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol
  - **Lines:** 18-19


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Constant PausableUpgradeable.PausableStorageLocation (node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol#25) is not in UPPER_CASE_WITH_UNDERSCORES


### Elements:
- **Element:** PausableStorageLocation
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol
  - **Lines:** 25-25


---
## Detector Report

**Impact:** Informational
**Confidence:** High

Function PausableUpgradeable.__Pausable_init_unchained() (node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol#60-63) is not in mixedCase


### Elements:
- **Element:** __Pausable_init_unchained
  - **File:** node_modules/@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol
  - **Lines:** 60-63


---
## Detector Report

**Impact:** Optimization
**Confidence:** High

Attacker.depositFunds (contracts/Attacker.sol#8) should be immutable 


### Elements:
- **Element:** depositFunds
  - **File:** contracts/Attacker.sol
  - **Lines:** 8-8


---
## Detector Report

**Impact:** Optimization
**Confidence:** High

Lock.unlockTime (contracts/Lock.sol#8) should be immutable 


### Elements:
- **Element:** unlockTime
  - **File:** contracts/Lock.sol
  - **Lines:** 8-8


---
## Detector Report

**Impact:** Optimization
**Confidence:** High

Attacker.owner (contracts/Attacker.sol#9) should be immutable 


### Elements:
- **Element:** owner
  - **File:** contracts/Attacker.sol
  - **Lines:** 9-9


---
## Detector Report

**Impact:** Optimization
**Confidence:** High

Lock.owner (contracts/Lock.sol#9) should be immutable 


### Elements:
- **Element:** owner
  - **File:** contracts/Lock.sol
  - **Lines:** 9-9


---
