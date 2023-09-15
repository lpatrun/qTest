import { Link } from 'react-router-dom';

import PostComponent from '../../shared/components/postComponent/PostComponent';
import { type Post, type Comment } from '../../../providers/PostsProvider';
import { MESSAGE } from '../../../const/message';
import styles from './styles.module.css';

interface Props {
    post: Post;
    userName?: string;
    comments: Comment[];
}

export default function PostWrapperComponent({ post, userName, comments }: Props) {
    return (
        <div className={styles.postWrapper}>
            <Link to={`/post/${post.id}`} state={{ post, userName, comments }}>
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
                    consoleStatement={`${MESSAGE}PostComponent ${post.id}`}
                />
            </Link>
        </div>
    );
}
