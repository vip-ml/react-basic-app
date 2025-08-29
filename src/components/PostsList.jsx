import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./Posts.module.css"
import { useState, useEffect } from "react";

function PostsList({ isPosting, onStopPosting }) {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch("http://localhost:8080/posts");
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
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
            {!isFetching && posts.length > 0 && (
                <ul className={classes.Posts} >
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul >)}
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no posts yet</h2>
                    <p>Start adding posts now!</p>
                </div>
            )}
            {isFetching && <p style={{ textAlign: "center", color: "white" }}>Loading posts...</p>}
        </>
    );
}

export default PostsList;