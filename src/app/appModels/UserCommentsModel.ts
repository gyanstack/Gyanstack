export class UserCommentsModel {
    constructor(comment: string, email: string, name: string) {
        this.comment = comment;
        this.email = email;
        this.userName = name;
        this.date = new Date().toDateString()
    }
    id: number;
    date: string;
    comment: string;
    email: string;
    userName: string;
}