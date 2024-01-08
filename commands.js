// get balance of given account
web3.fromWei(eth.getBalance('0xdDCc9d80602F8C37eD82C040BD22d19DB28ED987'), 'ether')

// get list of all connected nodes (IP addresses)
admin.peers.forEach(function(value){console.log(value.network.remoteAddress+"\t"+value.name)})

// add a peer
admin.addPeer(<valeur de l'enode remote obtenue à l'aide de admin.nodeInfo>)

// retrieve list of transactions in given block
eth.getBlock(8017276).transactions.forEach(function(value){console.log(value)})

// list of transactions in mempool
txpool.content // full details of each transactions
txpool.inspect // quick summary of each transaction

// list of all events in given transaction
eth.getTransactionReceipt("0x78482d3e5b5c3f4fd73df433343ab83160a90af8a0aaa25259c3117965af5d3d")


