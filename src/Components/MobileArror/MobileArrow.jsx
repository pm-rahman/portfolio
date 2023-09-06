import { Icon } from "@iconify/react";
import useTheme from "../../hooks/useTheme";

const MobileArrow = () => {
    const { theme } = useTheme();
    return (
        <div className="xl:hidden sticky top-[93%] md:top-[93%] lg:top-[92%] z-30 flex justify-end"
            data-aos="fade-up"
            data-aos-anchor="#home"
            data-aos-anchor-placement="top-bottom"
        >
            <a href="#slideBar" className={`relative w-10 h-10 left-[0%] md:left-[2%] lg:left-[4%] flex items-center justify-center rounded-full border bg-base-100 ${theme === "light" && "border-slate-900"}`}><Icon className="text-3xl" icon="fa-solid:caret-up" /></a>
        </div>
    );
};

export default MobileArrow;