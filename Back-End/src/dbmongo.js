const { MongoClient } = require('mongodb');

let singleton;

async function connectMongo(){
    if(singleton) return singleton;
    const client = new MongoClient(process.env.MONGO_HOST);
    await client.connect();
    singleton = client.db(process.env.MONGO_DATABASE);
    return singleton;
}

module.exports = {
    connectMongo
}