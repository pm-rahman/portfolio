import { Icon } from "@iconify/react";
import useTheme from "../../hooks/useTheme";

const Footer = () => {
    const { theme } = useTheme()
    return (
        <footer id="footer" className={`footer items-center gap-3 lg:gap-4 py-4 border-t ${theme !== "light" && "border-zinc-600"} `}>
            <div className="items-center grid-flow-col">
                <p >Copyright © 2023 - All rights reserved by Mokhlesur-Rahman</p>
            </div>
            <div className="grid-flow-col text-2xl gap-4 md:place-self-center md:justify-self-end">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mokhlesurRahman018/"><Icon icon="fa-brands:linkedin" /></a>
                <a target="_blank" rel="noreferrer" href="https://t.me/pmrahman"><Icon icon="fa-brands:telegram" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/pm-rahman"><Icon icon="fa-brands:github" /></a>
                <a target="_blank" rel="noreferrer" href="https://web.facebook.com/pm.mokhles"><Icon icon="fa-brands:facebook-square" /></a>
            </div>
        </footer>
    );
};

export default Footer;