import mongoose, { Schema, Document } from 'mongoose';

export interface ExternalUserType extends Document {
    participantName: string;
    ParticipantRegNumber: string;
    ParticipantPhone: string;
    ParticipantEmail: string;
    CommitteePreference1: string;
    Committee1AllotmentPreference1: string;
    Committee1AllotmentPreference2: string;
    Committee1AllotmentPreference3: string;
    CommitteePreference2: string;
    Committee2AllotmentPreference1: string;
    Committee2AllotmentPreference2: string;
    Committee2AllotmentPreference3: string;
    CommitteePreference3: string;
    Committee3AllotmentPreference1: string;
    Committee3AllotmentPreference2: string;
    Committee3AllotmentPreference3: string;
    MUNDelegateCount: number;
    MUNDelegateExperience: string;
    MUNExecutiveCount: number;
    MUNExecutiveExperience: string;
}

export const ExternalUserSchema = new Schema({
    participantName: {
        type: String,
        required: true,
    },
    ParticipantRegNumber: {
        type: String,
        required: true,
    },
    ParticipantPhone: {
        type: String,
        required: true,
    },
    ParticipantEmail: {
        type: String,
        required: true,
    },
    CommitteePreference1: {
        type: String,
        required: true,
    },
    Committee1AllotmentPreference1: {
        type: String,
        required: true,
    },
    Committee1AllotmentPreference2: {
        type: String,
        required: true,
    },
    Committee1AllotmentPreference3: {
        type: String,
        required: true,
    },
    CommitteePreference2: {
        type: String,
        required: true,
    },
    Committee2AllotmentPreference1: {
        type: String,
        required: true,
    },
    Committee2AllotmentPreference2: {
        type: String,
        required: true,
    },
    Committee2AllotmentPreference3: {
        type: String,
        required: true,
    },
    CommitteePreference3: {
        type: String,
        required: true,
    },
    Committee3AllotmentPreference1: {
        type: String,
        required: true,
    },
    Committee3AllotmentPreference2: {
        type: String,
        required: true,
    },
    Committee3AllotmentPreference3: {
        type: String,
        required: true,
    },
    MUNDelegateCount: {
        type: Number,
        required: true,
    },
    MUNDelegateExperience: {
        type: String,
        required: true,
    },
    MUNExecutiveCount: {
        type: Number,
        required: true,
    },
    MUNExecutiveExperience: {
        type: String,
        required: true,
    },
});

export const ExternalUser = mongoose.model<ExternalUserType>('ExternalUser', ExternalUserSchema);