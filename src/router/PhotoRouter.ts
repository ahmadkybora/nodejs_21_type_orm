import { Router } from "express";
import PhotoController from "../controllers/PhotoController";

export default (router: Router) => {
    router.get("", PhotoController.index);
};
