import { UserCommentsModel } from './UserCommentsModel';

export class ArticleModel {
    id: number;
    name: string;
    path: string;
    route: string;
    author: string;
    userAvatar: string;
    createdDate: string;
    subsectionId: number;
    section: string;
    subsection: string;
    likeCount: number;
    dislikeCount: number;
    public userComments: UserCommentsModel[];
    public contentHtml: string;
}