import mongoose, { Schema, Document } from 'mongoose';

export interface DelegatesType extends Document {
    OrganizationName: string;
    HeadDelegate: string;
    EmailID: string;
    ContactNumber: string;
    DelegationStrength: string;
}

export const DelegatesSchema = new Schema({
    OrganizationName: {
        type: String,
        required: true,
    },
    HeadDelegate: {
        type: String,
        required: true,
    }, EmailID: {
        type: String,
        required: true,
    }, ContactNumber: {
        type: String,
        required: true,
    }, DelegationStrength: {
        type: String,
        required: true,
    },
});

export const DelegatesUser = mongoose.model<DelegatesType>('Delegates', DelegatesSchema);