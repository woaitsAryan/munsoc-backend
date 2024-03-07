import mongoose, { Schema, Document } from 'mongoose';

export interface DelegatesType extends Document {
    name: string;
}

export const DelegatesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

export const DelegatesUser = mongoose.model<DelegatesType>('User', DelegatesSchema);