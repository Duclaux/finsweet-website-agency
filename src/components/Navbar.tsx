import { CircleX, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const logoTitle = "{finsweet";
const LINKTABS = [
    { name: "About Us", link: "/aboutUs" },
    { name: "Careers", link: "/careers" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" }
]

const openedNavClasses = `
  space-y-5 text-center backdrop-blur-3xl w-2/3 py-8 px-5
  absolute top-0 right-0
  translate-x-0 transition-transform duration-500
`;

const closedNavClasses = `
  space-y-5 text-center backdrop-blur-3xl w-2/3 py-8 px-5
  absolute top-0 right-0
  translate-x-full transition-transform duration-500
  md:flex md:relative md:translate-x-0 md:w-full md:p-0
  space-x-10 md:items-center md:space-y-0
`;

function Navbar() {

  const [ opened, setOpened ] = useState(false);

  const handleToggleNav = () => {
    setOpened(prevStae => !prevStae);
  }

  return (
    <nav className="flex justify-between items-center py-5">
      <h1 className="font-bold text-[#063255] text-3xl md:text-4xl lg:text-5xl">
        <Link to='/'>{logoTitle}</Link>
      </h1>

      <section>
        <div>
          <Menu 
            strokeWidth={2} 
            size={30}
            onClick={handleToggleNav}
            className="md:hidden"
          />
        </div>
        
        <ul className={`${opened ? openedNavClasses : closedNavClasses}`}>
          <CircleX 
            size={24} 
            color="black"
            onClick={handleToggleNav}
            className="md:hidden"
          />
          {
            LINKTABS.map((item) => (
              <li 
                key={item.link}
                className="text-link text-[#394149]"
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))
          }
          <Link to='/contactus' className="text-link bg-[#F58A07]/10 rounded-[31px] px-8 py-4.5 text-[#F58A07]">
            Contact us
          </Link>
        </ul>
      </section>
    </nav>
  )
}

export default Navbar
