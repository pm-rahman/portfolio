import Carousel from "../../../Components/Carousel/Carousel"
import img1 from "../../../assets/FreshFood/freshFood-1.jpg"
import img2 from "../../../assets/FreshFood/freshFood-2.jpg"
import img3 from "../../../assets/FreshFood/freshFood-3.jpg"
import img4 from "../../../assets/FreshFood/freshFood-4.jpg"
import img5 from "../../../assets/FreshFood/freshFood-5.jpg"
import SingleProject from "../SingleProject/SingleProject"

const FavoriteFoodRecipes = () => {
    return (
        <div>
            <Carousel
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                img5={img5}
            />
            <SingleProject
                title="Favorite Food Recipes"
                description="Explore the taste of Bangladesh through a React-based website. Discover a wide variety of recipes from talented Bangladeshi chefs. With ExpressJS handling the server side and the convenience of Firebase authentication."
                liveLink="https://favourite-food-recipes.web.app/"
                clientRepo="https://github.com/pm-rahman/frash-food-recipe-client"
                serverRepo="https://github.com/pm-rahman/frash-food-recipe-server"
            />
        </div>
    );
};

export default FavoriteFoodRecipes;