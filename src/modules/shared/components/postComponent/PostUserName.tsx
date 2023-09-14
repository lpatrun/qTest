import { usePostComponentContext } from './PostComponentContext';

function PostUserName() {
    const { singlePost } = usePostComponentContext();
    return <p>{singlePost.userName}</p>;
}

export default PostUserName;
