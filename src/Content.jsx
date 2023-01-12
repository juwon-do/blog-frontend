import { useState, useEffect } from 'react';
import axios from "axios";
import { PostNew } from './PostNew';
import { PostIndex } from './PostIndex';
import { PostShow } from './PostShow';
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
      <hr />
      <PostNew />
      <hr />
      {/* <button onClick={handleIndexPosts}>Get the data</button> */}
      <PostIndex posts={posts} onSelectPost={handleShowPost}/>
      <hr />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostShow postBody = {currentPost}/>
      </Modal>
    </div>
  );
}
