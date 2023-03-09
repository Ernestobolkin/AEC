const mongoose = require('mongoose');

const Card = new mongoose.Schema({
    cardIdentifierNumber: {
        type: String,
        required: true
    },
    cardName: {
        type: String,
        required: true
    }
});

const card = mongoose.model('Card', Card);

export default card;