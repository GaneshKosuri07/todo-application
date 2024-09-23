var Express=require("express");
var MongoClient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());
var CONNECTION_STRING="mongodb+srv://ganeshkosuri:gani0302@cluster0.5bosrn1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


var DATABASENAME="todoapp_db";
var database;

app.listen(3333,()=>{
    MongoClient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("MongoDB connection successful");
    })
});

app.get('api/todoapp/GetNotes',(request,response)=>{
    database.collection("todoapp_collection").find({}).toArray((error,result)=>{
        response.send(result);
    });
})