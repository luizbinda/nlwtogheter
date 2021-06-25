import {getCustomRepository} from "typeorm";
import {ComplimentRepository} from "../repositories/ComplimentRepository";
import {ComplimetModel} from "../models/ComplimetModel";
import {UserRepository} from "../repositories/UserRepository";

export class ComplimentService {
    private complimentRepository = getCustomRepository(ComplimentRepository)
    private userRepository = getCustomRepository(UserRepository)
    
    async save(complimetModel: ComplimetModel) {
        console.log(complimetModel)
        if (complimetModel.userReciver.id === complimetModel.userSender.id) {
            throw new Error("User receiver not valid!")
        }
        
        const userReciverExists = await this.userRepository.findOne(complimetModel.userReciver.id)

        if (!userReciverExists) {
            throw new Error("User receiver does not exists!")
        }
        
        const compliment = this.complimentRepository.create({
            ...complimetModel,
            userReciverId: complimetModel.userReciver.id,
            userSenderId: complimetModel.userSender.id,
            tagId: complimetModel.tag.id
        })
        
        await this.complimentRepository.save(compliment)
        
        return compliment
    }
    
    async listUserReceiveComplimemts(userId: number) {
        return await this.complimentRepository.find({
            where: {
                userReciverId: userId
            },
            relations: ["userReciver", "userSender", "tag"]
        })
    }
    
    async listUserSentComplimemts(userId: number) {
        return await this.complimentRepository.find({
            where: {
                userSenderId: userId
            },
            relations: ['userReciver', 'userSender', 'tag']
        })
    }
}
