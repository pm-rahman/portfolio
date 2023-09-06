import PageTitle from "../../Components/PageTitle/PageTitle";
import FavoriteFoodRecipes from "./FavoriteFoodRecipes/FavoriteFoodRecipes";
import FootballDen from "./FootballDen/FootballDen";
import LittleJoyful from "./LittleJoyful/LittleJoyful";

const Projects = () => {
    return (
        <div>
            <PageTitle title="Projects" />
            <div className="my-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <div
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-easing="ease-in-out"
                    className="my_card">
                    <FootballDen />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                    className="my_card">
                    <LittleJoyful />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-out"
                    className="my_card">
                    <FavoriteFoodRecipes />
                </div>
            </div>
        </div>
    );
};

export default Projects;