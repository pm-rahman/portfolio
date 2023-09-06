import { Typewriter } from "react-simple-typewriter";
import { Icon } from "@iconify/react";
import useTheme from "../../../hooks/useTheme";
import { useState } from "react";
// import { useState } from "react";

const SingleProject = ({ title, description, liveLink, clientRepo, serverRepo }) => {
    const [fullDescription, setFullDescription] = useState(false);
    const { theme } = useTheme();
    return (
        <div className="project_bio rounded rounded-t-none overflow-hidden">
            <div className={`p-4 rounded-b ${theme !== "light" && "border-zinc-500"}`}>
                <h2 className="text-xl inline-block  uppercase">{title}
                    <span className="text-red-500">
                        <Typewriter
                            words={['']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={40}
                            deleteSpeed={40}
                            delaySpeed={1500}
                        />
                    </span>
                </h2>
                <p className={`my-1 `}>{fullDescription ? <>{description}<span onClick={() => setFullDescription(false)} className="text-sky-500 hover:text-sky-600 cursor-pointer"> see less..</span></> : description.length >= 200 && <> {description.split('').slice(0, 190)} <span onClick={() => setFullDescription(true)} className="text-sky-500 hover:text-sky-600 cursor-pointer">see more..</span></>}</p>
                <div className="flex justify-between mt-4">
                    <div className="link_btn flex items-center gap-[2px]">
                        <Icon icon="heroicons-outline:link" />
                        <a className="hover:text-sky-600" target="_blank" rel="noreferrer" href={liveLink}><span>Live Link</span></a>
                    </div>
                    <div className="link_btn px-2 py-1 rounded-md flex items-center">
                        <Icon className="text-lg" icon="fa-brands:github" />
                        <a className="ml-2 hover:text-sky-600" target="_blank" rel="noreferrer" href={clientRepo}>Client</a>
                        <div className="px-1">|</div>
                        <a className="hover:text-sky-600" target="_blank" rel="noreferrer" href={serverRepo}>Server</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;