import './css/Food.css';

function Food(){
    return(
        <div id='food-container' className='container'>
            <div id='sushi' className='food-content'>
                <img src='https://i.pinimg.com/originals/44/00/8c/44008c9cdbab78372a271dc582727925.jpg'></img>
                <p>
                Sushi is a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold.
                It has become popular in the states over the years. It takes many years to master the art of making sushi. You will find some of the highest quality
                and freshest sushi in Japan. There are many highly recommended sushi restaurants in Japan, but Sukiyabashi Jiro is one of the most renowned in the world.
                </p>
            </div>
            <div id='ramen' className='food-content'>
                <img src='https://media.istockphoto.com/id/1365977387/photo/ramen-with-steaming-sizzle.jpg?b=1&s=170667a&w=0&k=20&c=8iOcgakOhguZ67D_dSUhMF5cAG_mgHBV8yiz1K74EFU='></img>
                <p>
                Ramen is a soup, more specifically, a broth-based soup bursting with wheat noodles, meat and/or vegetables, and a variety of toppings. 
                It's incredibly satisfying, flavorful, and comforting. There are many different types of ramen, and the regional variations are vast. From the broth to the toppings, its components vary widely. Nearly every region in Japan has its own variation of ramen. Some flavors include: 
                tonkotsu (pork bone broth), miso, shoyu (soy sauce). One of the most popular ramen chain is Ichiran Ramen
                </p>
            </div>
            <div id='okonomiyaki' className='food-content'>
                <img src='https://monmackfood.com/wp-content/uploads/Screen-Shot-2021-06-28-at-12.32.59-pm.jpeg'></img>
                <p>Okonomiyaki is a savory pancake and is made with vegetables, meat, seafood, and other ingredients, cooked on a griddle with flour-based batter and served with special sauce.

                </p>
            </div>
            <div id='mochi' className='food-content'>
                <img src='https://kirbiecravings.com/wp-content/uploads/2016/09/mochi-ice-cream-033.jpg'></img>
                <p> For those unfamiliar, mochi are rice cakes made with glutinous rice flour. It is traditionally made on New Year Eve, in a ceremony called mochitsuki, where the rice is pounded in 
                   a wooden mortar and hammer. It has a chewy texture and is stretchy. Mochi is versatile and can come in a variety of flavors
                   
                </p>
            </div>
        </div>
        
    )
}

export default Food;