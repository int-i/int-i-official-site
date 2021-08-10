import express from "express";
import { PostAddMember, GetUsers, PostRemoveUser } from "../controllers/adminController";
import routes from "../routers/routes";

const adminRouter = express.Router();

adminRouter.post(routes.inti, PostAddMember);

adminRouter.post(routes.deluser, PostRemoveUser);

adminRouter.get(routes.userinfo, GetUsers);

export default adminRouter;