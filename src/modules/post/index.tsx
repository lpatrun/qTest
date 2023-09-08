import { useParams } from 'react-router-dom';

export default function PostPage() {
    const { postId } = useParams();

    return (
        <div>
            <h1>Post page</h1>
        </div>
    );
}
