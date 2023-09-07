const GraduateCard = ({ year, title, subTitle, description }) => {
  return (
    <div>
      <span className="font-normal bg-red-700 text-white py-2 px-3 rounded-full capitalize">
        {year}
      </span>
      <h2 className="font-medium text-xl pt-5 capitalize">{title}</h2>
      <h4 className="mt-2 font-medium capitalize">{subTitle}</h4>
      <p className="mt-1 text-sm">{description}</p>
    </div>
  );
};

export default GraduateCard;
