import { User } from './user';

export interface Article {
    id: Number,
    name: String,
    user: User,
    postDate: Date,
    modifiedDate: Date,
    summary: String,
    content: String
}
