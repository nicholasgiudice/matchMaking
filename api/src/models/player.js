const mongoose = require("mongoose");

const player = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Player", player);
