import React from "react";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItems from "./components/PostItems";
import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
// import Counter from "./components/counter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: "Description 1" },
    { id: 2, title: 'Javascript', body: "Description 2" },
    { id: 3, title: 'Javascript', body: "Description 3" },
  ])


  return (
    <div className="App">
      <form action="">
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts}  title={"Посты про JS"} />
    </div>
  );
}

export default App;
