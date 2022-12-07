# TD5-GethAnalytics

Get the Eth balance of an account (1 pts)
```
eth.getBalance('0xdDCc9d80602F8C37eD82C040BD22d19DB28ED987')
```
Get a list of the IPs of all the nodes your node is connected to (2 pts)
```
admin.peers.forEach(function(value){console.log(value.network.remoteAddress+"\t"+value.name)})
```
Add another node of the class as a peer (2pts)
```
admin.addPeer(<valeur de l'enode remote obtenue à l'aide de admin.nodeInfo>) 
```
Get a list of all the transactions in block 8017276 (2 pts)
```
eth.getBlock(8017276).transactions.forEach(function(value){console.log(value)})
```
Get a list of all the transactions in your mempool (2 pts)
```
eth.getBalance(account)
```
Get a list of all the events in transaction 0x78482d3e5b5c3f4fd73df433343ab83160a90af8a0aaa25259c3117965af5d3d (2 pts)
```
eth.getBalance(account)
```
Get a list of all transactions sent to aave faucet minter (Find its address) (3 pts)
```
eth.getBalance(account)
```
Get a list of all addresses that claimed USDC directly on the aave minter (Find its address) (3 pts)
```
eth.getBalance(account)
```
Get a list of all users that deposited money,directly and indirectly (through a smart contract) in AAVE USDT market (3 pts)
```
eth.getBalance(account)
```
