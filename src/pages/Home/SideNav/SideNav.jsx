import { Icon } from "@iconify/react";

const SideNav = () => {
    return (
        <ul className="menu my_card hidden xl:block absolute top-[22%] -right-6 max-w-fit bg-base-100 py-4 px-0 rounded-full text-xl justify-center">
            <li>
                <a href="#home" className="tooltip tooltip-right" data-tip="Home">
                    <Icon icon="heroicons-outline:home" />
                </a>
            </li>
            <li>
                <a href="#about-me" className="tooltip tooltip-right" data-tip="About Me">
                    <Icon icon="fa-regular:user" />
                </a>
            </li>
            <li>
                <a href="#skills" className="tooltip tooltip-right" data-tip="Skills">
                    <Icon className="text-base" icon="fa-solid:user-cog" />
                </a>
            </li>
            <li>
                <a href="#contract" className="tooltip tooltip-right" data-tip="Contact">
                    <Icon icon="fa-regular:envelope" />
                </a>
            </li>
            <li>
                <a href="#footer" className="tooltip tooltip-right" data-tip="Footer">
                    <Icon icon="fa-regular:arrow-alt-circle-down" />
                </a>
            </li>
        </ul>
    );
};

export default SideNav;