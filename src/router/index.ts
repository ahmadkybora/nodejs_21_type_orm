import { Router } from "express";
import PhotoRouter from "./PhotoRouter";

const router = Router();

export default(): Router => {
    PhotoRouter(router);
    return router;
};
