import { usePostComponentContext } from './PostComponentContext';

import styles from './styles.module.css';

function PostComments() {
    const { singlePost } = usePostComponentContext();

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        const checkbox = document.getElementById(`toggle${singlePost.post.id}`) as HTMLInputElement;
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
        }
    };

    return (
        <>
            <p className={styles.postCommentTitle}>Comments:</p>
            <div className={styles.postCommentsWrapper}>
                {singlePost?.comments?.map(comment => (
                    <div key={comment.id} className={styles.postComment}>
                        <h3>{comment.name}</h3>
                        <p>{comment.body}</p>
                        <p className={styles.postCommentEmail}>{comment.email}</p>
                    </div>
                ))}
            </div>
            <input
                type='checkbox'
                id={`toggle${singlePost.post.id}`}
                className={styles.postCheckbox}
            />
            <button onClick={onClick} className={styles.postLabel}></button>
        </>
    );
}

export default PostComments;
