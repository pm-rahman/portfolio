import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AboutMe = () => {
    return (
        <div data-aos="slide-up" className="mt-6" id="about-me"  >
            <SectionTitle logo="fa-regular:user" title='About Me' headline="introduce myself" />
            <p data-aos="zoom-in-right" className="mt-6 font-serif xl:w-2/3 md:w-[80%] text-justify">{"My name is Mokhlesur Rahman, and I am from Dhaka, Bangladesh. I have completed my Diploma in Computer Science Technology from Dhaka Polytechnic Institute. During that time, I developed a deep interest in learning web development. That's why I chose web development as a career. I engage in web development because I love it."}</p>
        </div>
    );
};

export default AboutMe;