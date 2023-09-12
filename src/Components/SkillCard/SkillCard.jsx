const SkillCard = ({ logo, title }) => {
  return (
    <div data-aos="slide-left" className="flex flex-col items-center justify-center rounded-lg text-center p-5 cursor-pointer bg-base-200 hover:bg-slate-100 hover:text-black">
      <img
        className="max-h-20 mx-auto"
        style={{ maxWidth: "50%" }}
        src={logo}
        alt=""
      />
      <h1 className=" mt-2 font-semibold capitalize">{title}</h1>
    </div>
  );
};

export default SkillCard;
