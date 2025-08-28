import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./Posts.module.css"
import { useState, useEffect } from "react";

function PostsList({ isPosting, onStopPosting }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("http://localhost:8080/posts");
            const resData = await response.json();
            setPosts(resData.posts);
        }
        fetchPosts();
    }
        , []
    );

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existing) => [postData, ...existing])
    }


    return (
        <>
            {isPosting && (<Modal onClick={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
            </Modal>)}
            {posts.length > 0 && (
                <ul className={classes.Posts} >
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul >)}
            {posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no posts yet</h2>
                    <p>Start adding posts now!</p>
                </div>
            )}
        </>
    );
}

export default PostsList;