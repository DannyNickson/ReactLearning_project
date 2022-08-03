import React from "react";
import './styles/App.css';
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { useMemo } from "react";
import PostFilter from "./components/PostFilter";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: "Description 1" },
    { id: 2, title: 'Javascript', body: "Description 2" },
    { id: 3, title: 'Javascript', body: "Description 3" },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })


  const sortedPostst = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts])

  const sorterAndSearchedPosts = useMemo(() => {
    return sortedPostst.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPostst])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  //Важное описание работы сортировки. Метод sort() не возвращает новый массив а мутирует старый. Так как нам нельз изменять на прямую разворачиваем новый массив - копию оригинального и его мутируем.




  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sorterAndSearchedPosts} title={"Посты про JS"} />
    </div>
  );
}

export default App;
