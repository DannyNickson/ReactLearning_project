import React from "react";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import { useMemo } from "react";
// import Counter from "./components/counter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: "Description 1" },
    { id: 2, title: 'Javascript', body: "Description 2" },
    { id: 3, title: 'Javascript', body: "Description 3" },
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')


  const sortedPostst = useMemo(() => {
    console.log("ОТРАБОТАЛА")
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts])

  const sorterAndSearchedPosts = useMemo(() => {
    return sortedPostst.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPostst])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  //Важное описание работы сортировки. Метод sort() не возвращает новый массив а мутирует старый. Так как нам нельз изменять на прямую разворачиваем новый массив - копию оригинального и его мутируем.
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }



  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          option={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]}

        />
      </div>
      {sorterAndSearchedPosts.length !== 0
        ?
        <PostList remove={removePost} posts={sorterAndSearchedPosts} title={"Посты про JS"} />
        :
        <h1 style={{ textAlign: 'center' }}>
          Посты не были найденны
        </h1>
      }
    </div>
  );
}

export default App;
