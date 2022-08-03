import React from "react";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItems from "./components/PostItems";
import { useState, useRef } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
// import Counter from "./components/counter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: "Description 1" },
    { id: 2, title: 'Javascript', body: "Description 2" },
    { id: 3, title: 'Javascript', body: "Description 3" },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }



  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title={"Посты про JS"} />
        :
        <h1 style={{ textAlign: 'center' }}>
          Посты не были найденны
        </h1>
      }
    </div>
  );
}

export default App;
