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

  return (
    <div>
      <PostNew />
      {/* <button onClick={handleIndexPosts}>Get the data</button> */}
      <PostIndex posts={posts} />
      <Modal show={true}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
