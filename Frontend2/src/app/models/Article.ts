import { User } from './User';

export interface Article {
    id: number,
    name: string,
    user: User,
    postDate: Date,
    modifiedDate: Date,
    summary: string,
    content: string
}
