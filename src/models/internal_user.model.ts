import mongoose, { Schema, Document } from 'mongoose';

export interface InternalUserType extends Document {
    name: string;
}

export const InternalUserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

export const InternalUser = mongoose.model<InternalUserType>('User', InternalUserSchema);