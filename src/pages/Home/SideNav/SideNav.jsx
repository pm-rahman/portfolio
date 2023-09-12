import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

const SideNav = () => {
  const {hash}=useLocation();
  return (
    <ul className="menu border hidden xl:block absolute top-[20%] -right-7 max-w-fit bg-base-100 py-4 px-0 rounded-full text-xl justify-center">
      <li>
        <a href="#home" className="tooltip tooltip-right" data-tip="Home">
          <Icon className={`${hash==="#home"&&"text-red-700"}`} icon="heroicons-outline:home" />
        </a>
      </li>
      <li>
        <a
          href="#about-me"
          className="tooltip tooltip-right"
          data-tip="About Me"
        >
          <Icon className={`${hash==="#about-me"&&"text-red-700"}`} icon="fa-regular:user" />
        </a>
      </li>
      <li>
        <a href="#skills" className="tooltip tooltip-right" data-tip="Skills">
          <Icon className={`${hash==="#skills"&&"text-red-700"} text-base`} icon="fa-solid:user-cog" />
        </a>
      </li>
      <li>
        <a href="#my-education" className="tooltip tooltip-right" data-tip="Graduations">
          <Icon className={`${hash==="#my-education"&&"text-red-700"} text-base`} icon="fa-solid:graduation-cap" />
        </a>
      </li>
      <li>
        <a href="#my-work" className="tooltip tooltip-right" data-tip="My Work">
          <Icon className={`${hash==="#my-work"&&"text-red-700"} text-base`} icon="fa-solid:project-diagram" />
        </a>
      </li>
      <li>
        <a
          href="#contract"
          className="tooltip tooltip-right"
          data-tip="Contact"
        >
          <Icon className={`${hash==="#contract"&&"text-red-700"}`} icon="fa-regular:envelope" />
        </a>
      </li>
      <li>
        <a href="#footer" className="tooltip tooltip-right" data-tip="Footer">
          <Icon className={`${hash==="#footer"&&"text-red-700"}`} icon="fa-regular:arrow-alt-circle-down" />
        </a>
      </li>
    </ul>
  );
};

export default SideNav;
