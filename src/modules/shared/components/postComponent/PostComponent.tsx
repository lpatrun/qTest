import { type ReactNode } from 'react';
import { type SinglePost } from '../../../../providers/PostsProvider';
import PostComponentContext from './PostComponentContext';
import PostUserName from './PostUserName';
import PostTitle from './PostTitle';
import PostDescription from './PostDescription';
import PostComments from './PostComments';

interface Props {
    singlePost: SinglePost;
    userName: ReactNode;
    title: ReactNode;
    description: ReactNode;
    comments: ReactNode;
    consoleStatement: string;
}

export default function PostComponent({
    singlePost,
    userName,
    title,
    description,
    comments,
    consoleStatement,
}: Props) {
    //console.log(consoleStatement);

    return (
        <PostComponentContext.Provider value={{ singlePost }}>
            <div style={{ border: '2px solid gray', padding: 20 }}>
                {userName}
                {title}
                {description}
                {comments}
            </div>
        </PostComponentContext.Provider>
    );
}

PostComponent.UserName = PostUserName;
PostComponent.Title = PostTitle;
PostComponent.Description = PostDescription;
PostComponent.Comments = PostComments;
