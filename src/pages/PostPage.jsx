import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./../hooks/useFetch";
import PostService from "./../API/PostService";
import Loader from "./../components/UI/loader/Loader";
const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetch(async () => {
    const response = await PostService.getByID(params.id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetch(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments(params.id);
  }, []);

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
      <h1>Комментарии</h1>
      {isComLoading ? ( 
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h1>{comm.email}</h1>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostPage;
