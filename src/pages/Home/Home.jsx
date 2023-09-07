import MobileArrow from "../../Components/MobileArror/MobileArrow";
import PageTitle from "../../Components/PageTitle/PageTitle";
import AboutMe from "./AboutMe/AboutMe";
import Contract from "./Contract/Contract";
import Education from "./Education/Education";
import Sidebar from "./Sidebar/Sidebar";
import Skills from "./Skills/Skills";
import Slider from "./Slider/Slider";
import Training from "./Training/Training";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <div className="grid xl:grid-cols-3 gap-16 2xl:gap-6 my-11">
        <div>
          <Sidebar />
        </div>
        <div className="xl:col-span-2 flex flex-col lg:gap-14">
          <Slider />
          <MobileArrow />
          <AboutMe />
          <Skills />
          <Education />
          <Training />
          <Contract />
        </div>
      </div>
    </>
  );
};

export default Home;
