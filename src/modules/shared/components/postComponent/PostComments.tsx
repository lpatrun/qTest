import { usePostComponentContext } from './PostComponentContext';

function PostComments() {
    const { singlePost } = usePostComponentContext();

    return (
        <>
            {singlePost?.comments?.map(comment => (
                <div key={comment.id}>
                    <p>{comment.name}</p>
                    <p>{comment.body}</p>
                    <p>{comment.email}</p>
                </div>
            ))}
        </>
    );
}

export default PostComments;
