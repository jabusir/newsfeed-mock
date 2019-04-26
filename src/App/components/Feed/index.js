import React, { useState } from 'react';
import produce from 'immer';
import { uniqueId } from 'lodash';

import FeedForm from './FeedForm';
import FeedPost from './FeedPost';

import './index.css';

function Feed() {
    const [posts, setPosts] = useState([]);

    function addIdlessPost(idlessPost) {
        const post = {
            id: uniqueId('post'),
            ...idlessPost
        };
        setPosts(produce(prevPostsDraft => {
            prevPostsDraft.push(post);
        }));
    }

    return (
        <div className="Feed">
            <FeedForm addIdlessPost={addIdlessPost} />
            { posts.map(post => <FeedPost key={post.id} title={post.title} url={post.url} />) }
        </div>
    )
}

export default Feed;