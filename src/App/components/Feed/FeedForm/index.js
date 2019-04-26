import React from 'react';

import useFormInput from '../../../hooks/useFormInput.js';

import './index.css';

function FeedInput({ addIdlessPost }) {

    const urlInput = useFormInput('')
    const titleInput = useFormInput('');

    function handleSubmit(e) {
        e.preventDefault();

        const idlessPost = {
            url: urlInput.value,
            title: titleInput.value
        };

        addIdlessPost(idlessPost);

        urlInput.setValue('');
        titleInput.setValue('');
    }

    return (
        <form className="FeedForm" onSubmit={handleSubmit}>
            <input type="text" value={urlInput.value} onChange={urlInput.handleChange} />
            <div className="FeedFormLastRow">
                <input className="FeedFormLastRow__input" type="text" value={titleInput.value} onChange={titleInput.handleChange} />
                <button type="submit">New Post</button>
            </div>
        </form>
    )
}

export default FeedInput;