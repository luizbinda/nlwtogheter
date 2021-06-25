import {Request, Response} from "express";
import {ComplimentService} from "../services/ComplimentService";
import {ComplimetModel} from "../models/ComplimetModel";


export class ComplimentController {
    
    async save(request: Request, response: Response) {
        const { user_reciver, tag_id, message} = request.body
        const {userId} = request
        const compliment = new ComplimetModel();
        compliment.userSender.id = userId
        compliment.userReciver.id = user_reciver
        compliment.tag.id = tag_id
        compliment.message = message
        const service: ComplimentService = new ComplimentService()
        return response.json(await service.save(compliment))
    }
    
    async listUserReceiveComplimemts(request: Request, response: Response) {
        const {userId} = request
        const service: ComplimentService = new ComplimentService()
        return response.json(await service.listUserReceiveComplimemts(userId))
    }
    
    async listUserSentComplimemts(request: Request, response: Response) {
        const {userId} = request
        const service: ComplimentService = new ComplimentService()
        return response.json(await service.listUserSentComplimemts(userId))
    }
    
}
