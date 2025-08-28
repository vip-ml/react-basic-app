import classes from './NewPost.module.css';
import { useState } from 'react';


function NewPost({ onCancel }) {
    const [enteredText, setEnteredText] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    function textHandler(event) {
        setEnteredText(event.target.value);
    }

    function authorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            author: enteredAuthor,
            body: enteredText
        };
        console.log(postData);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={textHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorHandler} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;