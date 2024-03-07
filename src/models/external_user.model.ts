import mongoose, { Schema, Document } from 'mongoose';

export interface ExternalUserType extends Document {
    name: string;
}

export const ExternalUserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

export const ExternalUser = mongoose.model<ExternalUserType>('User', ExternalUserSchema);