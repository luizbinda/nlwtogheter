import {getCustomRepository} from "typeorm";
import {TagRepository} from "../repositories/TagRepository";
import {TagModel} from "../models/TagModel";

export class TagService {
    private tagRepository = getCustomRepository(TagRepository)
    
    async save(tagModel: TagModel) {
        if (!tagModel.name) {
            throw new Error("name is required!")
        }
        
        const tagExists = await this.tagRepository.findOne({
            name: tagModel.name
        })

        if (tagExists) {
            throw new Error("Tags already exists!")
        }
        
        const tag = this.tagRepository.create({...tagModel})
        
        await this.tagRepository.save(tag)
        
        return tag
    }

    async index() {
        return await this.tagRepository.find()
    }
}
