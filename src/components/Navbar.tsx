import { Link } from "react-router-dom";

const logoTitle = "{finsweet";
const LINKTABS = [
    { name: "About Us", link: "/aboutUs" },
    { name: "Careers", link: "/careers" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Contact us", link: "/contactus" }
]

function Navbar() {
  return (
    <nav>
      <h1 className="font-bold text-[#063255] text-3xl md:text-4xl lg:text-5xl">
        <Link to='/'>{logoTitle}</Link>
      </h1>

      <section>
        
        
        <ul>
          {
            LINKTABS.map((item) => (
              <li key={item.link}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
      </section>
    </nav>
  )
}

export default Navbar
