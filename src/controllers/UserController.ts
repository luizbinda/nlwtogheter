import {Request, Response} from "express";
import {UserService} from "../services/UserService";


export class UserController {
    
    async save(request: Request, response: Response) {
        const { name, email, admin, password} = request.body
        const service: UserService = new UserService()
        const user = await service.save({ name, email, admin: !!admin , password})
        return response.json(user)
    }

    async index(request: Request, response: Response) {
        const service: UserService = new UserService()
        const user = await service.index()
        return response.json(user)
    }
}
