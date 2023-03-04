import './App.css';

import Homepage from './components/Homepage';
import Food from './components/Food';

import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="food" element={<Food />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
const navStyle = {textDecoration: "none", color: "blue"};
function Layout() {
  return (
    <div className='container'>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className='navbar'>
        <li className='navbar_logo'>
          <Link style={navStyle} to="/">
            <img src=""></img>
          </Link>
        </li>
        <ul className='navbar_list'>
          <li className='navbar_item'>
            <Link style={navStyle} to="/">Home</Link>
          </li>
          <li className='navbar_item'>
            <Link style={navStyle} to="/food">Food</Link>
          </li>
          <li className='navbar_item'>
            <Link style={navStyle} to="/restaurants">Some Link</Link>
          </li>
          <li className='navbar_item'>
            <Link style={navStyle} to="/attractions">Some Link</Link>
          </li>
          <li className='navbar_item'>
            <Link style={navStyle} to="/nothing-here">Some Link</Link>
          </li>
        </ul>
        
      </nav>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

