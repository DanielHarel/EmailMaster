const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailUserSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('emailUsers', emailUserSchema);
// using two arguments in the model means we are loading something into mongoose