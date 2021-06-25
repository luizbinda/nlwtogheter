export class UserModel{
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public password?: string,
        public admin?: boolean,
        public created_at?: Date,
        public updated_at?: Date,
    ) {}
}
