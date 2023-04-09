const mongoose = require('mongoose');


const Transaction = new mongoose.Schema({
    Description: {
        type: String,
        required: false
    },
    Date: {
        type: String,
        default:new Date().toLocaleTimeString("he-IL", {timeZone: "Asia/Jerusalem"}) + " " + new Date().toLocaleDateString("he-IL", {timeZone: "Asia/Jerusalem"})
    },
    Amount: {
        type: Number,
        required: true
    },
  });

  const transaction = mongoose.model('Transaction', Transaction);

export default transaction;
