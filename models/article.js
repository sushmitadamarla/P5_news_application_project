const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
  headline: {
    type: String,
    required: [true, "Please enter headline"],
  },
  description: {
    type: String,
    required: [true, "Please enter Desc"],
  },
  link: {
    type: String,
    required: false,
    default: "",
  },
  img: {
    type: String,
    required: false,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("News", NewsSchema);
