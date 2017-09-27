export class UserCommentsModel {
    constructor(comment: string, email: string, name: string) {
        this.Comment = comment;
        this.UserEmail = email;
        this.UserName = name;
        this.Date = new Date().toDateString()
    }
    Id: number;
    Date: string;
    Comment: string;
    UserEmail: string;
    UserName: string;
}