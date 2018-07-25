const mongoose=require("mongoose");

const Schema=mongoose.Schema;

var ArticlesSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    key:{
        type:Number,
        required:true
    }
})

const Articles=mongoose.model("Articles",ArticlesSchema)

module.exports=Articles;