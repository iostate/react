const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://puhtooie:3AYcibMmF%qkt4u@binance-cluster-shard-00-00-r9v6v.mongodb.net:27017,binance-cluster-shard-00-01-r9v6v.mongodb.net:27017,binance-cluster-shard-00-02-r9v6v.mongodb.net:27017/test?ssl=true&replicaSet=binance-cluster-shard-0&authSource=admin&retryWrites=true';


// Database Name
const dbName = 'myproject';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  client.close();
});