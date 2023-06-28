import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Skills = () => {
    return (
        <div id="skills" className="mt-16 lg:mt-0 max-w-screen overflow-hidden" data-aos="slide-up">
            <SectionTitle logo="fa-solid:user-cog" title='My Skills' headline="My Skills" />
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 mt-16">
                <div className="tooltip tooltip-open tooltip-success" data-aos="zoom-in-right" data-tip="JavaScript">
                    <label className="absolute -top-6 right-0 font-mono">80%</label>
                    <progress className="progress bg-red-100 h-3 rounded w-full" value="80" max="100"></progress>
                </div>
                <div className="tooltip tooltip-open tooltip-success" data-aos="zoom-in-left" data-tip="React">
                    <label className="absolute -top-6 right-0 font-mono">85%</label>
                    <progress className="progress bg-red-100 h-3 rounded w-full" value="85" max="100"></progress>
                </div>
                <div className="tooltip tooltip-open tooltip-success" data-aos="zoom-in-right" data-tip="Express">
                    <label className="absolute -top-6 right-0 font-mono">70%</label>
                    <progress className="progress bg-red-100 h-3 rounded w-full" value="70" max="100"></progress>
                </div>
                <div className="tooltip tooltip-open tooltip-success" data-aos="zoom-in-left" data-tip="MongoDB">
                    <label className="absolute -top-6 right-0 font-mono">65%</label>
                    <progress className="progress bg-red-100 h-3 rounded w-full" value="65" max="100"></progress>
                </div>
                <div className="tooltip tooltip-open tooltip-success" data-aos="fade-up" data-tip="Figma">
                    <label className="absolute -top-6 right-0 font-mono">80%</label>
                    <progress className="progress bg-red-100 h-3 rounded w-full" value="80" max="100"></progress>
                </div>
                <div className="tooltip tooltip-open tooltip-success" data-aos="fade-up" data-tip="photoshop">
                    <label className="absolute -top-6 right-0 font-mono">70%</label>
                    <progress className="progress bg-red-100 h-3 rounded w-full" value="70" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;