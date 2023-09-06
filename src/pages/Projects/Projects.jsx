import PageTitle from "../../Components/PageTitle/PageTitle";
import SingleProject from "./SingleProject/SingleProject";
import projectData from "../../../public/projectData/projectData";

const Projects = () => {
  return (
    <div>
      <PageTitle title="Projects" />
      <div className="my-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projectData.map((project) => (
          <div
            key={project?.id}
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
            className="my_card"
          >
            <SingleProject
              slider={project?.thumbnail}
              title={project?.title}
              description={project?.description}
              liveLink={project?.liveLink}
              clientRepo={project?.clientRepo}
              serverRepo={project?.serverRepo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
