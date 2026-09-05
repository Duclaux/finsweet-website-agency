import { Link } from "react-router-dom";
import Container from "./Container";

const logoTitle = "{finsweet";
const LINKTABS = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/aboutUs" },
  { name: "Careers", link: "/careers" },
  { name: "Services", link: "/services" },
  { name: "Blog", link: "/blog" },
];

function Footer() {
  return (
    <div className="bg-[#063255] py-20 relative">
        <div className="w-13.25 h-37.5 lg:h-71.75 bg-[#F58A07] rounded-tl-[20px] rounded-bl-[20px] absolute top-8 right-0"/>
        <div className="w-13.25 h-36 bg-[#F58A07] rounded-tr-[20px] absolute bottom-0 left-0"/>
      <Container>
        <div className="xl:flex xl:items-start xl:justify-between space-y-5 xl:space-y-0 z-100 relative">
          <div className="w-87.75">
            <h1 className="font-bold text-white text-[24px]">
              <Link to="/">{logoTitle}</Link>
            </h1>
            <p className="text-[36px] font-semibold text-white my-8">
              Bespoke software solutions
            </p>
            <div className="flex items-center gap-4">
              <img src="../src/assets/images/facebook.svg" alt="" />
              <img src="../src/assets/images/youtube.svg" alt="" />
              <img src="../src/assets/images/instagram.svg" alt="" />
              <img src="../src/assets/images/twitter.svg" alt="" />
            </div>
          </div>
          <div className="w-full xl:w-23">
            <p className="text-[18px] font-semibold mb-6 text-white">Company</p>
            <ul className="space-y-4 flex space-x-2.5 xl:space-x-0 xl:flex-col">
                {LINKTABS.map((item) => (
                <li key={item.link} className="text-[16px] font-medium text-white">
                    <Link to={item.link}>{item.name}</Link>
                </li>
                ))}
            </ul>
          </div>
          <div className="w-full xl:w-35.5 relative">
            <p className="text-[18px] font-semibold mb-6 text-white">Connect</p>
            <div className="flex space-x-2.5 xl:space-x-0 xl:flex-col">
                <p className="text-[16px] text-white font-medium mb-4">hi@finsweet.com</p>
                <p className="text-[16px] text-white font-medium">+(123) 456-7890</p>
            </div>
            
          </div>
          <div className="w-85.5 h-49.75">
            <p className="text-[18px] font-semibold mb-6 text-white">Join Newsletter</p>

            <div>
                <input type="text" placeholder="Type email here" className="pl-7 py-4 rounded-[31px] bg-white focus:outline-none"/>
                <button className="text-white bg-[#F58A07] py-4 px-8 rounded-[31px] mt-4 text-[18px] font-semibold">
                    Subscribe
                </button>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-2 lg:space-y-0 lg:flex lg:items-center lg:justify-between text-white relative">
            <p className="font-medium text-[16px]">© All rights reserved – Finsweet</p>
            <p className="font-medium text-[16px]">Privacy Policy Terms & Conditions</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
