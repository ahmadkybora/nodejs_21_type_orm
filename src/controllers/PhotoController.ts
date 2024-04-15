import { Request, Response } from "express";
import { Photo } from "../models/Photo";
import { AppDataSource } from "../config/database";

class PhotoController {
    public static async index(request: Request, response: Response) {
        const photoRepository = AppDataSource.getRepository(Photo);
        const allPhotos = await photoRepository.find();
        const firstPhoto = await photoRepository.findOneBy({
            id: 1,
        });
        const meAndBearsPhoto = await photoRepository.findOneBy({
            name: "Me and Bears",
        });
        const [photos, photosCount] = await photoRepository.findAndCount();
        const photoToRemove = await photoRepository.findOneBy({
            id: 1,
        })
        await photoRepository.remove(photoToRemove);
        return response.json({ 
            "data": allPhotos
        });
        console.log("All photos from the db: ", allPhotos)
        // const photo = new Photo();
        // photo.name = "1";
        // photo.description = "1";
        // photo.views = "1";
        // photo.filename = "1";
        // photo.isPublished = true;
        // await AppDataSource.manager.save(photo);
    }
}

export default PhotoController;
