import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CardBlogs({ img, title }: { img: string; title: string }) {
  return (
    <div className="max-w-100">
      <img src={img} alt="" />

      <div className="my-6.5">
        <h4 className="text-2xl font-medium">{title}</h4>
        <p className="text-paragraph text-[#5B5B5B] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et,{" "}
        </p>
      </div>

      <Link to="/" className="flex items-center gap-2 text-[#F58A07]">
        Learn More <ArrowRight size={25} color="#F58A07" />
      </Link>
    </div>
  );
}

export default CardBlogs;
