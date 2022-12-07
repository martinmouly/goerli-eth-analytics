# TD5-GethAnalytics

Log into VM number 3 as administrateur1 and access Geth console with the following command
```
geth attach .ethereum/goerli/geth.ipc
```
---------------------------------------------
- Get the Eth balance of an account (1 pts)
```
eth.getBalance('0xdDCc9d80602F8C37eD82C040BD22d19DB28ED987')
```
![image](https://user-images.githubusercontent.com/19230666/206241671-843b9a30-e3f8-4758-bf90-c67d19366d02.png)  


- Get a list of the IPs of all the nodes your node is connected to (2 pts)
```
admin.peers.forEach(function(value){console.log(value.network.remoteAddress+"\t"+value.name)})
```
![image](https://user-images.githubusercontent.com/19230666/206241930-8cb0e835-8631-4603-9f6c-d20d470614c2.png)  


- Add another node of the class as a peer (2pts)
```
admin.addPeer(<valeur de l'enode remote obtenue à l'aide de admin.nodeInfo>)6
```

- Get a list of all the transactions in block 8017276 (2 pts)
```
eth.getBlock(8017276).transactions.forEach(function(value){console.log(value)})
```

- Get a list of all the transactions in your mempool (2 pts)
```
txpool.content
```
Get a list of all the events in transaction 0x78482d3e5b5c3f4fd73df433343ab83160a90af8a0aaa25259c3117965af5d3d (2 pts)
```
x
```
- Get a list of all transactions sent to aave faucet minter (Find its address) (3 pts)
```
0x1ca525Cd5Cb77DB5Fa9cBbA02A0824e283469DBe
```
- Get a list of all addresses that claimed USDC directly on the aave minter (Find its address) (3 pts)
```
x
```
- Get a list of all users that deposited money,directly and indirectly (through a smart contract) in AAVE USDT market (3 pts)
```
x
```
