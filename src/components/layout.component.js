import { Outlet, Link } from "react-router-dom";

const Layout = ({handleSubmit}) => {
 
  return (
    <>
    <h2>welcome</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/getall">getall</Link>
          </li>
          <li>
            <input type="button" value="logout" onSubmit={handleSubmit} />
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;