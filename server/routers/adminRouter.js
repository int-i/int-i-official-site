import express from "express";
import { PostAddMember } from "../controllers/adminController";
import routes from "../routers/routes";

const adminRouter = express.Router();

adminRouter.get(routes.inti, PostAddMember);

export default adminRouter;