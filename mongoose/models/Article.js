const mongoose = require("mongoose");

const { Schema } = mongoose;


const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    default : Date.now()
  },
  barcodeNumber:{
      type:String,
    //  // unique: true,
  }
});
BookSchema.methods.getName = function(){
  return this.name
}

module.exports = mongoose.model('article',BookSchema);