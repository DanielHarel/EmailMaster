import mongoose, { model } from 'mongoose';
const Schema = mongoose.Schema;

export interface EmailUserSchemaInterface extends mongoose.Document {
    googleId: string;
    credits: number;
};

export const emailUserSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

export default model<EmailUserSchemaInterface>('emailUsers', emailUserSchema);
// using two arguments in the model means we are loading something into mongoose. 
// first argument tells what the model class is.