import {Request, Response} from "express";
import {TagService} from "../services/TagService";

export class TagController {
    
    async save(request: Request, response: Response) {
        const { name } = request.body
        const service: TagService = new TagService()
        const tag = await service.save({ name })
        return response.json(tag)
    }

    async index(request: Request, response: Response) {
        const service: TagService = new TagService()
        const tags = await service.index()
        return response.json(tags)
    }
}
