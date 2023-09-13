import { useLocation } from 'react-router-dom';
import { type Comment } from '../../providers/PostsProvider';

export default function PostPage() {
    const { state } = useLocation();
    const { userName, post, comments } = state;

    return (
        <div style={{ margin: 50 }}>
            <h1 style={{ marginBottom: 20 }}>Post page</h1>

            <div style={{ border: '2px solid gray', padding: 20 }}>
                {userName && <p>{userName}</p>}
                <h2>{post.title}</h2>
                <p>{post.body}</p>

                {comments?.map((comment: Comment) => (
                    <div key={comment.id}>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                        <p>{comment.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
