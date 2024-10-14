import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/Posts">Posts</Link>
        </li>
        <li>
          <Link to="/About">About me</Link>
        </li>
        <li>
          <Link to="/Contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
