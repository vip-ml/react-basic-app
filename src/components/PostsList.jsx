import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./Posts.module.css"
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {




    return (
        <>
            {isPosting && (<Modal onClick={onStopPosting}>
                <NewPost />
            </Modal>)}
            <ul className={classes.Posts} >

                <Post author={"Kevin"} content={"I am 23 years old"} />
                <Post author={"Hena"} content={"I am 20 years old"} />
            </ul >
        </>
    );
}

export default PostsList;