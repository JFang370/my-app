import './css/Transportation.css';

function Transportation(){
    return(
        <div id='transportation' className='container'>
            <div id='option-1' className='transportation-content'>
                <img src='https://w0.peakpx.com/wallpaper/320/111/HD-wallpaper-japan-train-vehicles-shinkansen.jpg'></img>
                <div className='info'>
                    <h1>
                        Trains
                    </h1>
                    <p className='text'>
                    It is highly recommended to take the "Shinkansen" trains when travelling between cities. A japan Rail pass is needed and are valid for 7, 14, or 21 days. The trains are the most convenient and economical option, especially when taking multiple trains across Japan. 
                    You also have the option to reserve a seat. 
                    </p>
                    <button>Learn More!</button>
                </div>
            </div>
            <div id='option-2' className='transportation-content'>
                <div className='info'>
                    <h1>
                        Taxi
                    </h1>
                    <p className='text'>
                    In the larger cities you’ll find taxis around almost every corner.
                    Taxi drivers in Japan are generally highly trustworthy and will not try to take advantage of their clients. Licensed taxis can be recognized by their green license plates.
                    Fare calculation is almost always by the meter, though fares are generally fairly high.
                    It is best to avoid the morning and evening rush hours.
                    </p>
                    <button>Learn More!</button>
                </div>
                <img src='https://image.cnbcfm.com/api/v1/image/105104384-GettyImages-546314072.jpg?v=1532563661&w=1920&h=1080'></img>
            </div>
            <div id='option-3' className='transportation-content'>
                <img src='https://c0.wallpaperflare.com/preview/221/347/686/black-and-white-bus.jpg'></img>
                <div className='info'>
                    <h1> Buses </h1>
                    <p className='text'>
                    There are different types of buses in Japan: fixed-route buses that service urban areas, tour buses that go to tourist destinations, and long-distance highway buses that run between major cities.
                    Fixed-route buses make regular stops and are generally used by people to go to work, school, shopping, etc. Bus fare is generally flat, but depend on the number indicated on tickets. 
                    Tour buses travel to prominent tourist destinations. Tour guides are also available on board and can provide guidance in multiple languages. 
                    </p>
                    <button>Learn More!</button>
                </div>
                
            </div>
        </div>
    );
}

export default Transportation;