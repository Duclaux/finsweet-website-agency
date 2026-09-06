function ServiceCard({ img, title, reserveStyle }: { img: string; title: string, reserveStyle: string }) {
  return (
    <div className={`space-y-5 xl:space-y-0 xl:flex items-center justify-between xl:gap-19 ${reserveStyle}`}>
      <div className="relative w-fit">
        <img src={img} alt="" className=""/>
        <div className="bg-[#F58A07]/60 h-24.25 w-23.75 rounded-[20px] absolute top-1/2 -left-10"/>
      </div>
      <div>
        <h1 className="text-h1">{title}</h1>
        <p className="text-paragraph text-[#5B5B5B] my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Aliquam leo
          odio, sagittis quis ornare quis.met, consectetur<br/>adipiscing elit.
          Aliquam leo odio, sagittis quis ornare quis.
        </p>

        <ul className="text-paragraph text-[#5B5B5B] list-disc ml-10">
          <li>Individual risk assessment</li>
          <li>Systems risk assessment</li>
          <li>Mathematical conceptualization</li>
        </ul>
      </div>
    </div>
  );
}

export default ServiceCard;
