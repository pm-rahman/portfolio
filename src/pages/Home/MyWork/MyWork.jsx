import { Icon } from "@iconify/react";
import projectData from "/public/projectData/projectData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SingleProject from "../../Projects/SingleProject/SingleProject";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";

const MyWork = () => {
  return (
    <div id="my-work" className="mt-16 lg:mt-0">
      <SectionTitle
        logo="fa-solid:user-cog"
        title="My Work"
        headline="My Work"
      />
      <div className="my-work-section grid gap-3 mt-8 md:grid-cols-2 h-auto">
        {projectData.slice(0, 4)?.map((project) => (
          <SingleProject key={project?.id} project={project} />
        ))}
        </div>
      <div className=" text-center mt-8 lg:mt-10">
        <Link to="/my-work">
          <Button size="wide">
            Load More <Icon className="text-base" icon="fa:rotate-left" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MyWork;
