const mongoose = require('mongoose');

const UserTransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    transaction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true
    }
});

const UserTransaction = mongoose.model('UserTransaction', UserTransactionSchema);

export default UserTransaction;