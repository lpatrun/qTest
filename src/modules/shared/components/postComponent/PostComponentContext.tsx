import { createContext, useContext } from 'react';
import { type SinglePost } from '../../../../providers/PostsProvider';

const PostComponentContext = createContext<{ singlePost: SinglePost } | null>(null);

export function usePostComponentContext() {
    const context = useContext(PostComponentContext);
    if (!context) {
        throw new Error(
            'PostComponent.* component must be rendered as child of PostComponent component'
        );
    }
    return context;
}

export default PostComponentContext;
