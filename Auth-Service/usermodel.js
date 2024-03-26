const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true },
    login: { type: String, required: true, unique: true },
    mdp: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
