const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    Password: {
            type: String,
            required: true,
            minlength: 8
    },
    Cards:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }],
    CreationDate: {
        type: String,
        default: new Date().toLocaleTimeString("he-IL", {timeZone: "Asia/Jerusalem"}) + " " + new Date().toLocaleDateString("he-IL", {timeZone: "Asia/Jerusalem"})
    },
    Credentials: {
        salt: {
            type: String,
            required: false
        }
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        // validate: function (value) {
        //   if (!validator.isEmail(value)) {
        //     throw new Error("Email is invalid");
        //   }
        // },
      },
});

const User = mongoose.model('User', UserSchema);

export default User;