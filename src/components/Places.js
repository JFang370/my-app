import './css/Places.css';

function Places(){
    return(
        <div id='places-container' className='container'>
            <div id='place-1' className='places-content'>
                <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTf9vzmx0JT6GGIGUNGp0xq6aTWO4s_yyKUZIfcP3JlwDFyecldiBuvkh9jmo_hz1LdZ7GfIQQ35hVR11UEhD946Q'></img>
                <p> The Tokyo Skytree is the talles building in Tokyo.
                    It has two observational decks, offering a spectacular view over the city </p>
            </div>
            <div id='place-2' className='places-content'>
                <img src='https://www.japan-guide.com/g18/3034_001_02.jpg'></img>
                <p>Enjoy Japan's favorite flower at Shinjuku Gyoen. It is famous for Japanese tradition of cherry blossom viewing. It is open every day from the 25th of March to 24th of April. </p>
            </div>
            <div id='place-3' className='places-content'>
                <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRpIXXec62c3k4z-5vr3ofSxe95lZH_6rRNii7VoBD78CkvkoShjWBvOsdoi-1ZPyeN_SYJoJbHelwcIVrRmUx1g'></img>
                <p>Fushimi Inari is famous for its tunnels of more than 10,000 closely-spaced orange torii gates that wind over the hills of Mt. Inari.
                   The Yotsutsuji intersection about halfway up the trail
                   provides you with breathtaking views of Kyoto and surrounds.
                </p>
            </div>
            <div id='place-4' className='places-content'>
                <img src='https://lh5.googleusercontent.com/p/AF1QipM3jzHCABTAEOMUxNsfbiSVS6s6O9dFkJs3oXYz=w511-h287-n-k-no'></img>
                <p>Ghibli Park is a theme park in Nagakute, Aichi, Japan. An immersive wonderland based on the beloved films of Studio Ghibli.
                   If you are a fan of the works of Studio Ghibli, it is a must visit.
                </p>
            </div>
        </div>
    );
}

export default Places;