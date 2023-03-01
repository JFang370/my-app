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
      <div className='wrapper_navbar'>
        <nav className='navbar'>
          <ul className='navbar_list'>
            <span>
              <li className='navbar_item'>
              <Link style={navStyle} to="/">Homepage</Link>
              </li>
            </span>
            <span>
              <li className='navbar_item'>
              <Link style={navStyle} to="/">Homepage</Link>
              </li>
            </span>
            <span>
              <li className='navbar_item'>
              <Link style={navStyle} to="/">Homepage</Link>
              </li>
            </span>
            <span>
              <li className='navbar_item'>
              <Link style={navStyle} to="/">Homepage</Link>
              </li>
            </span>
          </ul>
        </nav>

        {/* Slideshow */}

      </div>
      <div className='wrapper_about'>
        <div className='section_about'>
          <div className='row'>
            <div className='column'>
              <div id='header' className='row'>
              <div className='column-placeholder'></div>
                <div className='title-column'>Random Title</div>
                <div className='column-placeholder'></div>
                <div className='column-placeholder'></div>
              </div>
              <div id='information' className='row'>
                <div className='column-placeholder'></div>
                <div className='image-column'>
                  <img src></img>
                </div>
                <div className='text-column'>
                  <div className='column'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
                </div>
                <div className='column-placeholder'></div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <div id='header' className='row'>
              <div className='column-placeholder'></div>
                <div className='column-placeholder'></div>
                <div className='title-column'>Random Title</div>
                <div className='column-placeholder'></div>
              </div>
              <div id='information' className='row'>
                <div className='column-placeholder'></div>
                <div className='text-column'>
                  <div className='column'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
                </div>
                <div className='image-column'>
                <img src></img>
                </div>
                <div className='column-placeholder'></div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <div id='header' className='row'>
              <div className='column-placeholder'></div>
                <div className='title-column'>Random Title</div>
                <div className='column-placeholder'></div>
                <div className='column-placeholder'></div>
              </div>
              <div id='information' className='row'>
                <div className='column-placeholder'></div>
                <div className='image-column'>
                  <img src></img>
                </div>
                <div className='text-column'>
                  <div className='column'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
                </div>
                <div className='column-placeholder'></div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}