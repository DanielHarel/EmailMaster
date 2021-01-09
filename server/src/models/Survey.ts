import mongoose, { Schema, model } from 'mongoose';
import recipientSchema from './Recipient';

export interface SurveySchema extends mongoose.Document {
    title: String;
    body: String;
    subject: String;
    recipients: typeof recipientSchema;
    yes: Number;
    no: Number;
    _user: Schema.Types.ObjectId;
    dateSent: Date;
    lastResponded: Date;
};

export const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'EmailUser'},
    dateSent: Date,
    lastResponded: Date
});

export default model<SurveySchema>('surveys', surveySchema);