var mongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
mongoClient.connect('mongodb://nadineteste:workshop123@kamino.mongodb.umbler.com:51179/workshop', { useNewUrlParser: true })
    .then(conn => global.conn = conn.db('workshop'))
    .catch(err => console.log(err))


function findAll(callback) {
    //let banco=global.conn.db('workshop');
    global.conn.collection('customers').find({}).toArray(callback);
}

function insert(customer, callback) {
    //let banco=global.conn.db('workshop');
    global.conn.collection('customers').insert(customer, callback);
}

function deleteOne(id, callback) {
    //  let banco=global.conn.db('workshop');
    global.conn.collection('customers').deleteOne({ _id: new ObjectId(id) }, callback);
}

module.exports = { findAll, insert, deleteOne }