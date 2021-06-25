import {UserModel} from "../models/UserModel";
import {UserRepository} from "../repositories/UserRepository";
import {getCustomRepository} from "typeorm";
import {hash} from 'bcryptjs'

export class UserService {
    private userRepository = getCustomRepository(UserRepository)
    
    async save(userModel: UserModel) {
        if (!userModel.email) {
            throw new Error("Email is required!")
        }
        
        const userExists = await this.userRepository.findOne({
            email: userModel.email
        })

        if (userExists) {
            throw new Error("User Already Exists!")
        }
        
        userModel.password = await hash(userModel.password, 8)
        
        const user = this.userRepository.create({...userModel})
        
        await this.userRepository.save(user)
        
        return user
    }

    async index() {
        return await this.userRepository.find()
    }
}
