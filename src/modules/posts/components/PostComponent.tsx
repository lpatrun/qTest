import { Link } from 'react-router-dom';
import { type Post, type Comment } from '../../../providers/PostsProvider';

interface Props {
    post: Post;
    userName?: string;
    comments?: Comment[];
    consoleStatement: string;
}

export default function PostComponent({ post, userName, comments, consoleStatement }: Props) {
    //console.log(consoleStatement);

    return (
        <div style={{ marginBottom: 30 }}>
            <Link to={`/post/${post.id}`} state={{ post, userName, comments }}>
                <div style={{ border: '2px solid gray', padding: 20 }}>
                    {userName && <p>{userName}</p>}
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>

                    {comments?.map(comment => (
                        <div key={comment.id}>
                            <p>{comment.name}</p>
                            <p>{comment.body}</p>
                            <p>{comment.email}</p>
                        </div>
                    ))}
                </div>
            </Link>
        </div>
    );
}
