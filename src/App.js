import React from "react";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItems from "./components/PostItems";
import { useState } from "react";
import PostList from "./components/PostList";
// import Counter from "./components/counter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: "Description 1" },
    { id: 2, title: 'Javascript', body: "Description 2" },
    { id: 3, title: 'Javascript', body: "Description 3" },
  ])
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: "Description 1" },
    { id: 2, title: 'Python', body: "Description 2" },
    { id: 3, title: 'Python', body: "Description 3" },
  ]) 
  const [posts3, setPosts3] = useState([
    { id: 1, title: 'TypeScript', body: "Description 1" },
    { id: 2, title: 'TypeScript', body: "Description 2" },
    { id: 3, title: 'TypeScript', body: "Description 3" },
  ])


  return (
    <div className="App">
      <PostList posts={posts} title={"Посты про JS"} />
      <PostList posts={posts2} title={"Посты про Python"} />
      <PostList posts={posts3} title={"Посты про TypeScript"} />
    </div>
  );
}

export default App;
