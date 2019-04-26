import React from 'react';

import './index.css';

function FeedPost({ title, url }) {
    return (
        <div className="FeedPost">
            <div className="FeedPost__title">{ title }</div>
            <img className="FeedPost__image" src={url} alt="" />
        </div>
    )
}

export default FeedPost;