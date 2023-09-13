import { useContext, useEffect, useState } from 'react';

import { MESSAGE } from '../../const/message';
import { PostsContext, type Post } from '../../providers/PostsProvider';
import PostComponent from './components/PostComponent';

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

    //console.log('Hello, PostsPage');

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

                <input type='text' onChange={e => onChangeText(e.target.value)} />
            </div>

            {filteredPosts.map(post => (
                <PostComponent
                    key={post.id}
                    post={post}
                    userName={users.find(user => user.id === post.userId)?.name}
                    comments={comments.filter(comment => comment.postId === post.id)}
                    consoleStatement={`${MESSAGE}PostComponent ${post.id}`}
                />
            ))}
        </div>
    );
}
