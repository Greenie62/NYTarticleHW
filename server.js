const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose=require('mongoose');
const mongojs=require('mongojs');

const databaseUrl="Articles";
const collections=["Articles"];

const db=mongojs(databaseUrl,collections)
//Mongoose has been  MONGO waste of my time in connection to database 
// for some reason. MongoJS connects like a charm.
//var db=require('./models')

//mongoose.connect("mongodb://localhost/Articles");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//send the article/ID to the back-end, put into a global variable so it can be
//eligible for a get request on the saved article link.
var savedArticle={};

app.post('/saveArticle',(req,res)=>{
  savedArticle=req.body;
  console.log(req.body)
  db.Articles.insert({title:savedArticle.article,key:savedArticle.id},function(err){
    if(err){
    console.log(err)}
    else{console.log("posted!")}
  })
  res.end()
})

app.get("/savedArticles",(req,res)=>{
  db.Articles.find({},function(err,data){
    if(err){console.log(err)}
    else{console.log(data)
    res.send(data)}
  })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
