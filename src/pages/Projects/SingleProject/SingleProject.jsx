import { Typewriter } from "react-simple-typewriter";
import { Icon } from "@iconify/react";
import useTheme from "../../../hooks/useTheme";
import { useState } from "react";
// import { useState } from "react";

const SingleProject = ({ project }) => {
  const { thumbnail, title, description, liveLink, github = [] } = project;
  const [fullDescription, setFullDescription] = useState(false);
  const { theme } = useTheme();
  return (
    <div
      className="rounded shadow-lg h-fit shadow-base-300"
      data-aos="zoom-in-left"
    >
      <figure className="h-48 overflow-hidden">
        <img src={thumbnail} alt="" />
      </figure>
      <div
        className={`p-4 rounded-b ${theme !== "light" && "border-zinc-500"}`}
      >
        <h2 className="text-xl inline-block text-red-700 font-semibold uppercase">
          {title}
          <span className="text-red-700">
            <Typewriter
              words={[""]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className={`my-1 font-serif `}>
          {fullDescription ? (
            <>
              {description}
              <span
                onClick={() => setFullDescription(false)}
                className="ml-1 text-red-700 cursor-pointer"
              >
                see less
              </span>
            </>
          ) : description?.length >= 180 ? (
            <>
              {description.split("").slice(0, 180)}{" "}
              <span
                onClick={() => setFullDescription(true)}
                className="ml-1 text-red-700 cursor-pointer"
              >
                see more
              </span>
            </>
          ) : (
            <>{description} </>
          )}
        </p>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-[2px] hover:gap-1 px-3 py-2 bg-red-700 hover:bg-red-800 rounded text-white font-semibold">
            <Icon className="hidden mr-[1px] sm:inline-block" icon="heroicons-outline:link" />
            <a target="_blank" rel="noreferrer" href={liveLink}>
              <span>View Project</span>
            </a>
          </div>
          <div className="px-2 py-1 rounded-md flex items-center">
            <Icon className="text-lg" icon="fa-brands:github" />
            {github?.map((item) => (
              <a
                key={item?.id}
                className="githubLink hover:opacity-80 capitalize flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
                href={item?.link}
              >
                {item?.title}
                <Icon className="hidden sm:inline-block text-sm" icon="heroicons-outline:link" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
