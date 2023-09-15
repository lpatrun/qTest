import { useLocation } from 'react-router-dom';

import { MESSAGE } from '../../const/message';
import PostComponent from '../shared/components/postComponent/PostComponent';
import styles from './styles.module.css';

export default function PostPage() {
    const { state } = useLocation();
    const { userName, post, comments } = state;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Post page</h1>

            <PostComponent
                singlePost={{
                    post,
                    comments,
                    userName,
                }}
                userName={<PostComponent.UserName />}
                title={<PostComponent.Title />}
                description={<PostComponent.Description />}
                comments={<PostComponent.Comments />}
                consoleStatement={`${MESSAGE}Single Post, ${post.id}`}
            />
        </div>
    );
}
