import { usePostComponentContext } from './PostComponentContext';

import styles from './styles.module.css';

function PostDescription() {
    const { singlePost } = usePostComponentContext();
    return <p className={styles.postBody}>{singlePost.post.body}</p>;
}

export default PostDescription;
