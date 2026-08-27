import { CircleX, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const logoTitle = "{finsweet";
const LINKTABS = [
    { name: "Home", link: "/" },
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
  lg:flex lg:relative lg:translate-x-0 lg:w-full lg:p-0
  space-x-5 lg:space-x-10 lg:items-center lg:space-y-0
`;

function Navbar() {

  const [ opened, setOpened ] = useState(false);

  const handleToggleNav = () => {
    setOpened(prevStae => !prevStae);
  }

  return (
    <nav className="flex justify-between items-center py-5">
      <h1 className="font-bold text-[#063255] text-3xl lg:text-5xl">
        <Link to='/'>{logoTitle}</Link>
      </h1>

      <section>
        <div>
          <Menu 
            strokeWidth={2} 
            size={30}
            onClick={handleToggleNav}
            className="lg:hidden"
          />
        </div>
        
        <ul className={`${opened ? openedNavClasses : closedNavClasses}`}>
          <CircleX 
            size={24} 
            color="black"
            onClick={handleToggleNav}
            className="lg:hidden"
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
          <li className="text-link px-8 py-4.5 bg-[#F58A07]/10 rounded-[31px]">
            <Link to='/contactus' className="text-[#F58A07]">
              Contact us
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default Navbar
