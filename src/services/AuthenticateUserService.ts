import {getCustomRepository} from "typeorm";
import {UserRepository} from "../repositories/UserRepository";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";


export class AuthenticateUserService {
    private userRepository = getCustomRepository(UserRepository)
    
    async login(email: string, password: string) {
        const user = await this.userRepository.findOne({
            email
        }) 

        if (!user) {
            throw new Error("Email/Password incorrect!")
        }
        
        if (!await compare(password, user.password)) {
            throw new Error("Email/Password incorrect!")
        }
        return sign(
            {
                email: user.email
            },
            'senha-aleatoria',
            {
                subject: `${user.id}`,
                expiresIn: '1d'
            }
        );
    }
}
