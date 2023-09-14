import { usePostComponentContext } from './PostComponentContext';

function PostDescription() {
    const { singlePost } = usePostComponentContext();
    return <p>{singlePost.post.body}</p>;
}

export default PostDescription;
