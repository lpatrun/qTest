import { usePostComponentContext } from './PostComponentContext';

import styles from './styles.module.css';

function PostTitle() {
    const { singlePost } = usePostComponentContext();
    return <h2 className={styles.postTitle}>{singlePost.post.title}</h2>;
}

export default PostTitle;
