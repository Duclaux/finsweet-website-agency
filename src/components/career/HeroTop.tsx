import { Link } from "react-router-dom"
import CircularBadge from "../CircularBadge"
import Container from "../Container"

function HeroTop() {
  return (
    <div className="flex-1 min-h-0 h-full w-screen xl:bg-[#DCEAF5] -z-20 py-10 xl:py-20 mb-50 xl:mb-30">
      <Container>
        <header className="xl:flex xl:items-center space-y-3 xl:space-y-0">
          <section className="w-full h-fit md:h-90">
            <h1 className="text-h1">
              We hired people who are very passionate about what they do
            </h1>

            <p className="text-paragraph text-[#5B5B5B] mt-6 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
            </p>

            <button className="text-link px-5 py-3 xl:px-8 xl:py-4.5 bg-[#F58A07] rounded-[31px]">
                <Link to="/services" className="text-white">
                  Work With Us
                </Link>
              </button>
          </section>

          <section className="w-full h-62.5 md:h-154 xl:h-162.5 relative">
            <img src="../src/assets/images/career-banner-img.png" alt="" className="w-full"/>
            <div className="absolute top-1/2 -right-10 hidden xl:flex">
                <CircularBadge text="Best agency 2020 - 2021 | london" />
            </div>
          </section>
        </header>
      </Container>
    </div>
  )
}

export default HeroTop
