import { z } from 'zod';

export const ExternalUserSchema = z.object({
    ParticipantName: z.string(),
    ParticipantGender: z.string(),
    ParticipantPhone: z.string(),
    ParticipantEmail: z.string(),
    ParticipantOrganizationName: z.string(),
    ParticipantAccomodation: z.string(),
    CommitteePreference1: z.string(),
    Committee1AllotmentPreference1: z.string(),
    Committee1AllotmentPreference2: z.string(),
    Committee1AllotmentPreference3: z.string(),
    CommitteePreference2: z.string(),
    Committee2AllotmentPreference1: z.string(),
    Committee2AllotmentPreference2: z.string(),
    Committee2AllotmentPreference3: z.string(),
    CommitteePreference3: z.string(),
    Committee3AllotmentPreference1: z.string(),
    Committee3AllotmentPreference2: z.string(),
    Committee3AllotmentPreference3: z.string(),
    MUNDelegateCount: z.string().transform((val) => parseInt(val, 10)),
    MUNDelegateExperience: z.string(),
    MUNExecutiveCount: z.string().transform((val) => parseInt(val, 10)),
    MUNExecutiveExperience: z.string(),
});

export const InternalUserSchema = z.object({
    ParticipantName: z.string(),
    ParticipantRegNumber: z.string(),
    ParticipantPhone: z.string(),
    ParticipantEmail: z.string(),
    CommitteePreference1: z.string(),
    Committee1AllotmentPreference1: z.string(),
    Committee1AllotmentPreference2: z.string(),
    Committee1AllotmentPreference3: z.string(),
    CommitteePreference2: z.string(),
    Committee2AllotmentPreference1: z.string(),
    Committee2AllotmentPreference2: z.string(),
    Committee2AllotmentPreference3: z.string(),
    CommitteePreference3: z.string(),
    Committee3AllotmentPreference1: z.string(),
    Committee3AllotmentPreference2: z.string(),
    Committee3AllotmentPreference3: z.string(),
    MUNDelegateCount: z.string().transform((val) => parseInt(val, 10)),
    MUNDelegateExperience: z.string(),
    MUNExecutiveCount: z.string().transform((val) => parseInt(val, 10)),
    MUNExecutiveExperience: z.string(),
});

export const DelegatesSchema = z.object({
    OrganizationName: z.string(),
    HeadDelegate: z.string(),
    EmailID: z.string(),
    ContactNumber: z.string(),
    DelegationStrength: z.string().transform((val) => parseInt(val, 10)),
});