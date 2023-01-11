import { useState, useEffect } from 'react';
import axios from "axios";
import { PostNew } from './PostNew';
import { PostIndex } from './PostIndex';
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const [currentPost, setCurrentPost] = useState({});
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const handleShowPost = (post) => {
    console.log(post);
    setCurrentPost(post);

    setIsPostsShowVisible(true);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  return (
    <div>
      <PostNew />
      {/* <button onClick={handleIndexPosts}>Get the data</button> */}
      <PostIndex posts={posts} onSelectPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <h3>{currentPost.title}</h3>
        <p>{currentPost.body}</p>
      </Modal>
    </div>
  );
}
