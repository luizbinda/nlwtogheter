import {UserModel} from "./UserModel";
import {TagModel} from "./TagModel";

export class ComplimetModel{
    constructor(
        public id?: number,
        public userSender?: UserModel,
        public userReciver?: UserModel,
        public tag?: TagModel,
        public message?: string,
        public created_at?: Date,
    ) {
        this.userSender = new UserModel()
        this.userReciver = new UserModel()
        this.tag = new TagModel()
    }
}
