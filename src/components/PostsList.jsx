import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./Posts.module.css"
import { useState } from "react";

function PostsList(props) {


    const [enteredText, setEnteredText] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    function textHandler(event) {
        setEnteredText(event.target.value);
    }

    function authorHandler(event) {
        setEnteredAuthor(event.target.value);
    }
 
    return (
        <>
            {props.isPosting && (<Modal onClick={props.onStopPosting}>
                <NewPost onTextChange={textHandler} onAuthorChange={authorHandler} />
            </Modal>)}
            <ul className={classes.Posts} >
                <Post author={enteredAuthor} content={enteredText} />
                <Post author={"Kevin"} content={"I am 23 years old"} />
                <Post author={"Hena"} content={"I am 20 years old"} />
            </ul >
        </>
    );
}

export default PostsList;