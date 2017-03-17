import { UserCommentsModel } from './UserCommentsModel';
import { PostCommentModel } from './PostCommentModel';

export class ArticleModel {
    id: number;
    sectionId: number;
    question: string;
    articlePath: string;
    userComments: UserCommentsModel[];
    postComment: PostCommentModel;
}