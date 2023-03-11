const mongoose = require('mongoose');

const Card = new mongoose.Schema({
    CardIdentifierNumber: {
        type: String,
        required: true
    },
    CardName: {
        type: String,
        required: true
    },
    CreationDate: {
        type: String,
        default: new Date().toLocaleTimeString("he-IL", {timeZone: "Asia/Jerusalem"}) + " " + new Date().toLocaleDateString("he-IL", {timeZone: "Asia/Jerusalem"})
    },
    NameHolder: {
        type: String,
        required: true
    },
    Payments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment'
    }
});

const card = mongoose.model('Card', Card);

export default card;