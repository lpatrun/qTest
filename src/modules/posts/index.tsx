import { useContext, useEffect, useState } from 'react';

import { PostsContext, type Post } from '../../providers/PostsProvider';
import PostWrapperComponent from './components/PostWrapperComponent';

export default function PostsPage() {
    const { users, posts, comments } = useContext(PostsContext);
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const onChangeText = (text: string) => {
        const filtered = users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));

        if (filtered.length > 0 && filtered.length < users.length) {
            const ids: number[] = filtered.map(el => el.id);
            const filteredPosts: Post[] = posts.filter((post: Post) => ids.includes(post.userId));
            setFilteredPosts(filteredPosts);
        } else {
            setFilteredPosts(posts);
        }
    };

    // console.log('Hello, PostsPage');

    useEffect(() => {
        setFilteredPosts(posts);
    }, [posts]);

    return (
        <div style={{ margin: 50 }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 20,
                    justifyContent: 'space-between',
                }}
            >
                <h1>Posts page</h1>

                <input
                    type='text'
                    style={{ paddingInline: 10 }}
                    onChange={e => onChangeText(e.target.value)}
                    placeholder='Filter by user name'
                />
            </div>

            {filteredPosts.map(post => {
                const userName = users.find(user => user.id === post.userId)?.name;
                const postComments = comments.filter(comment => comment.postId === post.id);

                return (
                    <PostWrapperComponent
                        key={post.id}
                        userName={userName}
                        post={post}
                        comments={postComments}
                    />
                );
            })}
        </div>
    );
}
