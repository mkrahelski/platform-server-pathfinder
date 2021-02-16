import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const MongoClient = require('mongodb').MongoClient;
// import mongodb from 'mongodb'
// import bodyParser from 'body-parser';
const bodyParser = require('body-parser')

dotenv.config()


//for local database development
//https://zellwk.com/blog/local-mongodb/
//https://treehouse.github.io/installation-guides/windows/mongo-windows.html 



 mongoose.connect( process.env.DATABASE_URI, { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true,  serverSelectionTimeoutMS: 10000 })
     .then(() => console.log( 'Database Connected' ))
     .catch(error => console.log( error ));


//As you can see in the api documentation, using save is now deprecated.
// (I guess you are using the last version which is currently 2.1)
//Amazing!

const app = express();
const PORT = 8000;

export const db = mongoose.connection; // which connection is this?? is this for any connection or the first one made?
//what I can't use db to refere

db.on('error', (error) => console.error(error) );
//when db on 'error', (error) like function console.log an error?

db.once('open', () => console.log("Database is Open") );
//currently i am getting errors, by the fact I am not working correctly with promises, eh. Whatevs.
//no errors that means it's connected

app.use(bodyParser.json())
//https://stackoverflow.com/questions/58431043/unhandledpromiserejectionwarning-typeerror-cannot-read-property-name-of-undef
//thank the lord


const artRouter = require('./routes/articles')

app.use('/articles', artRouter) //art router is imported, at /articles use art router which has that specific route
// 'localhost:8000/articles' //anything that has this URl goes into the articles router? or anything after /articles/~~
//body.parser json to use json //it changed https://github.com/expressjs/body-parser - app.use(bodyParser.json())

app.listen(PORT, () => {console.log(`Express server listening on ${PORT}`);}); 
















/*
db.once('open', () => {
//this functionality is called out as deprciiated. How to do with mongoose.
    db.db.collection("YourCollectionName", function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(data); // it will print your collection data
        })
    });

});
*/



// Database Name

/*
MongoClient.connect(process.env.DATABASE_URI2, function(error:any, client:any) {

const adminDb = client.db('Platform').admin();
// List all the available databases

adminDb.listDatabases(function(error:any) {

client.close();

});

});
*/


// const dataBaseSelect = new Mongo().getDB("Platform");

/*
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {

    connection.db.collection("YourCollectionName", function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(data); // it will print your collection data
        })
    });

});
*/