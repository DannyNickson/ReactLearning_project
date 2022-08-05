import React from "react";
import './styles/App.css';
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePost";
import { useEffect } from "react";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: "Description 1" },
    { id: 2, title: 'Javascript', body: "Description 2" },
    { id: 3, title: 'Javascript', body: "Description 3" },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal,setModal] = useState(false)
  const [isPostsLoading,setIsPostsLoading] = useState(false)
    
  useEffect(()=>{
    fetchPosts()
  },[])

  const sorterAndSearchedPosts = usePosts(posts,filter.sort,filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  async function fetchPosts()
  {
        setIsPostsLoading(true);
        setTimeout(async ()=>{
          const posts = await PostService.getAll();
          setPosts(posts)
          setIsPostsLoading(false);
        },1000)
       
  }

  return (
    <div className="App">
      <hr style={{ margin: '15px 0' }} />
      <MyButton onClick ={() => setModal(true)}>Создать пользовательский пост</MyButton> 
      <MyModal visible={modal} setVisible = {setModal} ><PostForm create={createPost} /></MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading
        ?<div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader/></div>
        :<PostList remove={removePost} posts={sorterAndSearchedPosts} title={"Посты про JS"} />
      }
      
    </div>
  );
}

export default App;
