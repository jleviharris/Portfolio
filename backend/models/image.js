const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: { type: String },
  img: {
    data: Buffer,
    contentType: String,
  },
});

const Images = new mongoose.model("Images", imageSchema);

module.exports = Images;
