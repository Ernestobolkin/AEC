const mongoose = require('mongoose');


const Transaction = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
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

  const payment = mongoose.model('Transaction', Transaction);

export default payment;
