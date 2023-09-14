import { usePostComponentContext } from './PostComponentContext';

function PostTitle() {
    const { singlePost } = usePostComponentContext();
    return <h2>{singlePost.post.title}</h2>;
}

export default PostTitle;
