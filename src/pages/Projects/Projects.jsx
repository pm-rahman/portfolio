import PageTitle from "../../Components/PageTitle/PageTitle";
import FavoriteFoodRecipes from "./FavoriteFoodRecipes/FavoriteFoodRecipes";
import FootballDen from "./FootballDen/FootballDen";
import LittleJoyful from "./LittleJoyful/LittleJoyful";

const Projects = () => {
    return (
        <div>
            <PageTitle title="Projects" />
            <div className="my-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <div data-aos="zoom-in-right" className="project">
                    <FootballDen />
                </div>
                <div data-aos="zoom-in" className="project">
                    <LittleJoyful />
                </div>
                <div data-aos="zoom-in-left" className="project">
                    <FavoriteFoodRecipes />
               </div>
            </div>
        </div>
    );
};

export default Projects;