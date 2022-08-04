import React from "react";
import './styles/App.css';
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { useMemo } from "react";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: "Description 1" },
    { id: 2, title: 'Javascript', body: "Description 2" },
    { id: 3, title: 'Javascript', body: "Description 3" },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal,setModal] = useState(false)
  //Важное описание работы сортировки. Метод sort() не возвращает новый массив а мутирует старый. Так как нам нельз изменять на прямую разворачиваем новый массив - копию оригинального и его мутируем.
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
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }





  return (
    <div className="App">
      <hr style={{ margin: '15px 0' }} />
      <MyButton onClick ={() => setModal(true)}>Создать пользовательский пост</MyButton> 
      <MyModal visible={modal} setVisible = {setModal} ><PostForm create={createPost} /></MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sorterAndSearchedPosts} title={"Посты про JS"} />
    </div>
  );
}

export default App;
