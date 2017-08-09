import { UserCommentsModel } from './UserCommentsModel';
// import { PostCommentModel } from './PostCommentModel';

export class ArticleModel {
    articleId: number;
    sectionId: number;
    articleName: string;
    articlePath: string;
    author: string;
    updatedDate: string;
    public userComments: UserCommentsModel[];
    public contentHtml:string;
}