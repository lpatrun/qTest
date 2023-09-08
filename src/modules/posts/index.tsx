import { Link } from 'react-router-dom';

export default function PostsPage() {
    return (
        <div>
            <h1>Posts page</h1>

            <Link to={`/post/1`}>Post 1</Link>
        </div>
    );
}
