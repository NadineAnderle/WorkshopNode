var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://nadineteste:9mj8jS7BY4pJfyH@kamino.mongodb.umbler.com:49415/teste')
 .then(conn => global.conn = conn)
 .catch(err => console.log(err))


function findAll(callback){
    global.conn.collection('customers').find({}).toArray(callback);
}

module.exports = { findAll}