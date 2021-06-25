import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
    const token = request.headers.authorization;
    
    if (!token) {
        return response.status(401).end()
    }
    
    try {
        const {sub} = verify(token.split(' ')[1], 'senha-aleatoria')
        request.userId = Number(sub) 
        return next()
    } catch (err) {
        return response.status(401).end()
    }
}
