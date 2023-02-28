import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

const navStyle = {textDecoration: "none", color: "blue"};
function Layout(){
  return(
    <div className="body">
      <header>
      <div className="nav_bar">
        <nav>
          {/* Add logo */}
          <ul className="nav_list">
            <span>
            <li className='nav_link'>
              <Link style={navStyle} to="/">Homepage</Link>
            </li>
            </span>
            <span>
            <li className='nav_link'>
              <Link style={navStyle} to="/">Places To Visit</Link>
            </li>
            </span>
            <span>
            <li className='nav_link'>
              <Link style={navStyle} to="/">Must Tries</Link>
            </li>
            </span>
            <span>
            <li className='nav_link'>
              <Link style={navStyle} to="/">Some Link</Link>
            </li>
            </span>
          </ul>
        </nav>
        </div>
        </header>
    </div>
  );
}