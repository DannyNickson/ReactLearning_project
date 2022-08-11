import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./../hooks/useFetch";
import PostService from "./../API/PostService";
import Loader from "./../components/UI/loader/Loader";
const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetch(async () => {
    const response = await PostService.getByID(params.id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById()
  },[]);

  return (
    <div>
      <h1>Вы попали на страницу поста с ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
    </div>
  );
};

export default PostPage;
