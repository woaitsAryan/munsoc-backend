import mongoose, { Schema, Document } from 'mongoose';

export interface InternalUserType extends Document{
    ParticipantName: string;
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
    MUNDelegateCount: string;
    MUNDelegateExperience: string;
    MUNExecutiveCount: string;
    MUNExecutiveExperience: string;
}

export const InternalUserSchema = new Schema({
    ParticipantName: {
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
        type: String,
        required: true,
    },
    MUNDelegateExperience: {
        type: String,
        required: true,
    },
    MUNExecutiveCount: {
        type: String,
        required: true,
    },
    MUNExecutiveExperience: {
        type: String,
        required: true,
    },
});

export const InternalUser = mongoose.model<InternalUserType>('InternalUser', InternalUserSchema);