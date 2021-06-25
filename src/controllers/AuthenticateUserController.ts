import {Request, Response} from "express";
import {AuthenticateUserService} from "../services/AuthenticateUserService";


export class AuthenticateUserController {
    async login(request: Request, response: Response) {
        const { email, password} = request.body
        const service: AuthenticateUserService = new AuthenticateUserService()
        const token = await service.login(email, password)
        return response.json(token)
    }
}
