const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo: {
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        default:Date.now
    }
  });


module.exports = mongoose.model("todo",todoSchema);