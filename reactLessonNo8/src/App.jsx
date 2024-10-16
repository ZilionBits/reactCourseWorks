import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import Contacts from "./components/Contacts";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import { NotFound } from "./components/404";
import { Comments } from "./components/Comments";
import { Details } from "./components/Details";
import { EditPost } from "./components/EditPost";
import { PostsWithImage } from "./components/PostsWithImage";
import React, { Suspense } from "react";

const About = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Page Loading</h1>}>
              <About />
            </Suspense>
          }
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="postsWithImage" element={<PostsWithImage />} />
          <Route path="comments" element={<Comments />}>
            <Route path="details" element={<Details />} />
            <Route path="editPost" element={<EditPost />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
