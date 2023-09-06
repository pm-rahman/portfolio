import { Typewriter } from "react-simple-typewriter";
import { Icon } from "@iconify/react";
import useTheme from "../../../hooks/useTheme";
import { useState } from "react";
// import { useState } from "react";

const SingleProject = ({
  slider,
  title,
  description,
  liveLink,
  clientRepo,
  serverRepo,
}) => {
  const [fullDescription, setFullDescription] = useState(false);
  const { theme } = useTheme();
  return (
    <div className="rounded shadow-lg shadow-base-300 overflow-hidden">
      <figure className="h-48 overflow-hidden">
        <img src={slider} alt="" />
      </figure>
      <div
        className={`p-4 rounded-b ${theme !== "light" && "border-zinc-500"}`}
      >
        <h2 className="text-xl inline-block text-red-500 font-semibold uppercase">
          {title}
          <span className="text-red-500">
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
                className="text-red-500 hover:text-red-600 cursor-pointer"
              >
                {" "}
                see less..
              </span>
            </>
          ) : (
            description.length >= 180 && (
              <>
                {" "}
                {description.split("").slice(0, 180)}{" "}
                <span
                  onClick={() => setFullDescription(true)}
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                >
                  see more
                </span>
              </>
            )
          )}
        </p>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-[2px] px-3 py-2 bg-red-500 hover:bg-red-700 rounded text-white font-semibold">
            <Icon icon="heroicons-outline:link" />
            <a target="_blank" rel="noreferrer" href={liveLink}>
              <span>View Project</span>
            </a>
          </div>
          <div className="px-2 py-1 rounded-md flex items-center">
            <Icon className="text-lg" icon="fa-brands:github" />
            <a
              className="ml-2 hover:text-red-600"
              target="_blank"
              rel="noreferrer"
              href={clientRepo}
            >
              Client
            </a>
            <div className="px-1">|</div>
            <a
              className="hover:text-red-600"
              target="_blank"
              rel="noreferrer"
              href={serverRepo}
            >
              Server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
