import { Icon } from "@iconify/react";
import useTheme from "../../hooks/useTheme";

const SectionTitle = ({ logo, title, headline }) => {
    const { theme } = useTheme();
    return (
        <>
            <div data-aos="slide-up" className={`flex w-fit gap-2 items-center border px-3 py-1 rounded-full mb-8 xl:mt-24 ${theme !== "light" && "border-zinc-600"}`}>
                <Icon className="text-base text-red-500" icon={logo} />
                <span className="uppercase text-base">{title}</span>
            </div>
            <h1 className={`capitalize header_text text-3xl lg:text-4xl ${theme !== "light" && "text-white"}`}>{headline}</h1>
        </>
    );
};

export default SectionTitle;