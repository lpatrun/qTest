import { createContext, useEffect, useState } from 'react';
import { axiosInstance } from '../service';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface PostsContextProps {
    users: User[];
    posts: Post[];
    comments: Comment[];
}

export const PostsContext = createContext<PostsContextProps>({
    users: [],
    posts: [],
    comments: [],
});

export default function PostsProvider({ children }: { children: React.ReactNode }) {
    const [users, setUsers] = useState<User[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        (async () => {
            Promise.all([
                axiosInstance.get('users'),
                axiosInstance.get('posts'),
                axiosInstance.get('comments'),
            ]).then(data => {
                setUsers(data[0].data);
                setPosts(data[1].data);
                setComments(data[2].data);
            });
        })();
    }, []);

    return (
        <PostsContext.Provider value={{ users, posts, comments }}>{children}</PostsContext.Provider>
    );
}
