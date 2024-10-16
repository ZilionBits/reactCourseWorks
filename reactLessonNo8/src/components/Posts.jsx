import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <Link to={"comments"}>Read comments</Link>
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
};
export default Posts;
