import express from "express"
import { registerDelegateController, registerExternalController, registerInternalController } from "../controllers/register.controller.js";

const registerRouter = express.Router();

registerRouter.post("/internal", registerInternalController);
registerRouter.post("/external", registerExternalController);
registerRouter.post("/delegate", registerDelegateController);

export default registerRouter;