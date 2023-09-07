import GraduateCard from "../../../Components/GraduateCard/GraduateCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Education = () => {
  return (
    <div
      id="my-education"
      className="mt-16 lg:mt-0 max-w-screen overflow-hidden"
    >
      <SectionTitle
        logo="fa-solid:graduation-cap"
        title="My education"
        headline="My education"
      />
      <div className="grid md:grid-cols-2 gap-3 mt-10">
        <GraduateCard
          year="july, 2018 - march, 2023"
          title="Diploma In Computer Science And Technology"
          subTitle="Dhaka Polytechnic Institute"
        />
        <GraduateCard
          year="2018"
          title="SSC"
          subTitle="lakshmipur technical training center"
        />
      </div>
    </div>
  );
};

export default Education;
