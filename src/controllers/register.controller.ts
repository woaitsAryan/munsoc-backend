import { Request, Response } from "express";
import catchAsync from "../helpers/catchAsync.js";
import { InternalUserSchema, ExternalUserSchema, DelegatesSchema } from "../schema/register.schema.js";
import { InternalUser } from "../models/internal_user.model.js";
import { ExternalUser } from "../models/external_user.model.js";
import { DelegatesUser } from "../models/delegates.model.js";

export const registerInternalController = catchAsync(
    async (req: Request, res: Response) => {

        const parsedData = InternalUserSchema.safeParse(req.body);
        if(!parsedData.success) return res.status(400).json({ message: 'Invalid data', errors: parsedData.error.errors });
        const data = parsedData.data;

        const existingUser = await InternalUser.findOne({ ParticipantRegNumber: data.ParticipantRegNumber });
        if(existingUser) return res.status(400).json({ message: 'User already exists' });
        const user = new InternalUser(data);
        await user.save();
        return res.status(200).json({ message: 'User registered successfully' });
        
    })

export const registerExternalController = catchAsync(
    async (req: Request, res: Response) => {

        const parsedData = ExternalUserSchema.safeParse(req.body);
        if(!parsedData.success) return res.status(400).json({ message: 'Invalid data', errors: parsedData.error.errors });
        const data = parsedData.data;

        const existingUser = await ExternalUser.findOne({ ParticipantPhone: data.ParticipantPhone });
        if(existingUser) return res.status(400).json({ message: 'User already exists' });
        const user = new ExternalUser(data);
        await user.save();
        return res.status(200).json({ message: 'User registered successfully' });

    })

export const registerDelegateController = catchAsync(
    async (req: Request, res: Response) => {
        const parsedData = DelegatesSchema.safeParse(req.body);
        if(!parsedData.success) return res.status(400).json({ message: 'Invalid data', errors: parsedData.error.errors });
        const data = parsedData.data;
        const existingUser = await DelegatesUser.findOne({ OrganizationName: data.OrganizationName });
        if(existingUser) return res.status(400).json({ message: 'User already exists' });
        const user = new DelegatesUser(data);
        await user.save();
        return res.status(200).json({ message: 'User registered successfully' });
    })