const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    senha: String,
    email: String,
    active: {
        type: Boolean,
        required: true,
        default: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);