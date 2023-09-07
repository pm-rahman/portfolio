import GraduateCard from "../../../Components/GraduateCard/GraduateCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Training = () => {
  return (
    <div
      id="my-training"
      className="mt-16 lg:mt-0 max-w-screen overflow-hidden"
    >
      <SectionTitle
        logo="fa-solid:graduation-cap"
        title="My Training"
        headline="My Training"
      />
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <GraduateCard
          year="jan, 2023 - Jane, 2023"
          title="Web Development"
          subTitle="Programming Hero, Online"
          description="I Have Learned HTML, CSS, JavaScript, React, Node Js, Next js And Many Other from this course. I Have Also Learned The Skills Of Time Management From This Course."
        />
        <GraduateCard
          year="October, 2022 - Jun, 2023"
          title="Web Development"
          subTitle="Ideal Institute Of Science And Technology (Iist) - Mirpur"
          description="During That time i passed level-4 Exam in Wordpress Theme Development."
        />
      </div>
    </div>
  );
};

export default Training;
