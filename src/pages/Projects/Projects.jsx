import PageTitle from "../../Components/PageTitle/PageTitle";
import SingleProject from "./SingleProject/SingleProject";
import projectData from "/public/projectData/projectData";

const Projects = () => {
  return (
    <div>
      <PageTitle title="Projects" />
      <div className="my-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projectData.map((project) => (
          <div
            key={project?.id}
          >
            <SingleProject
              project={project}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
