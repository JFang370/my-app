import './css/Homepage.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";

const navStyle = {textDecoration: "none", color: "white"};
function Homepage(){
    return(
        <div className='home-container'>
          <div className='main'>
          <img src="https://wallpaper.dog/large/10765597.jpg"></img>
          <div className='item-1'>
            <div id='header'>
              <h1>Visit Japan Today!</h1>
            </div>
            <div id='text'>
              Discover new and unique experiences that can only be found in Japan!
            </div>
            <button>
              <Link style={navStyle} to="/">Learn More!</Link> 
            </button>
          </div>
          <div className='item-2'>
            <div id='info1' className='content'>
              {/* Attractions */}
              <img src='https://ak-d.tripcdn.com/images/1i66u221584od6mea495F.jpg?proc=source/trip'></img>
              <p></p>
            </div>
            <div id='info2' className='content'>
              {/* Scenery */}
              <img src='https://assets3.thrillist.com/v1/image/3115440/828x610/flatten;crop;webp=auto;jpeg_quality=60.jpg'></img>
              <div className='text'>
                <h1></h1>
                <p> From the lavender fields of Furano in Hokkaido down to the crystal clear beaches of Okinawa, 
                    this small country is filled with gorgeous nature,  
                </p>
              </div>
            </div>
            <div id='info3' className='content'>
              {/* Food */}
              <img src='https://u7.uidownload.com/vector/305/723/vector-sushi-food-illustration-eps.jpg'></img>
              <p> Japanese food is known for its unique flavors as well as influences from other Asian countries
                  Its preparation and presentation honed over the centuries, so that its flavors are refined, elegant
                  pure, and delicate. The best Japanese food tells a story, bringing an enjoyable and eye-opening 
                  dinning experience 
              </p>
            </div>
          </div>

            
          </div>
          <div className='right-sidebar'>
            <div className=''></div>
          </div>
        </div>
      );
}

export default Homepage;