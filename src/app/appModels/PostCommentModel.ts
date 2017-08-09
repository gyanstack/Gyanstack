export class PostCommentModel {

    constructor(articleId:number) {
        this.articleId = articleId;
    }

    public articleId: number;
    public userName: string;
    public userEmail: string;
    public comment: string;

}