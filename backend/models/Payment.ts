const mongoose = require('mongoose');


const Payment = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: false
    },
    Date: {
        type: Date,
        required: true,
        default:new Date(new Date().toLocaleTimeString("he-IL", {timeZone: "Asia/Jerusalem"}))
    },
    Amount: {
        type: Number,
        required: true
    }
  });

  const payment = mongoose.model('Payment', Payment);

export default payment;