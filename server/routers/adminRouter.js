import express from "express";
import { PostAddMember } from "../controllers/adminController";
import routes from "../routers/routes";

const adminRouter = express.Router();

adminRouter.post(routes.inti, PostAddMember);

export default adminRouter;