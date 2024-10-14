import axios from "axios";
import { Post } from "./Post";
import { useEffect, useState } from "react";

export const Posts = () => {
  //   const getPosts = () => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((reponse) => reponse.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.log(error));
  //   };

  //   const getPostsAxios = () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => console.log(response.data))
  //       .catch((error) => console.log(error));
  //   };
  const [postsData, setPostsData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPostsData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <h1>Post Loading</h1>;
  }

  return (
    <>
      {postsData.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </>
  );
};
