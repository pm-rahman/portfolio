import { Icon } from "@iconify/react";
import projectData from "../../../../public/projectData/projectData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SingleProject from "../../Projects/SingleProject/SingleProject";
import { Link } from "react-router-dom";

const MyWork = () => {
  return (
    <div id="my-work" className="mt-16 lg:mt-0" data-aos="slide-up">
      <SectionTitle
        logo="fa-solid:user-cog"
        title="My Work"
        headline="My Work"
      />
      <div className="my-work-section grid gap-3 mt-8 lg:grid-cols-2 h-auto">
        {projectData.slice(0, 4)?.map((project) => (
          <SingleProject key={project?.id} project={project} />
        ))}
      </div>
      <div className=" text-center mt-6 lg:mt-10">
        <Link to="/my-work">
          <button className="mx-auto flex items-center gap-4 px-3 py-2 bg-red-700 rounded text-base text-white font-normal hover:gap-5 hover:bg-red-800">
            Load More <Icon className="text-base" icon="fa:rotate-left" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyWork;
