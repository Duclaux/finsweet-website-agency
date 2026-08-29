import { Link } from "react-router-dom";
import Container from "../Container";

function HomeHeader() {
  return (
    <div className="flex-1 min-h-0 h-full w-screen bg-[#DCEAF5] -z-20 pt-7 xl:pt-0">
      <Container>
        <header className="xl:flex xl:items-center">
          <section className="w-full h-fit md:h-90 xl:h-109.75">
            {/* Hero title */}
            <div>
              <h1 className="text-h1">
                Prosper with our
                <br /> bespoke solutions
              </h1>
              <p className="text-paragraph text-[#5B5B5B] mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br className="hidden md:flex" />
                Suspendisse varius enim in eros elementum tristique
              </p>
            </div>

            {/* Hero CTA */}
          <div className="mt-4 xl:mt-8 flex gap-1.5 xl:gap-9 items-center">
              <button className="text-link px-5 py-3 xl:px-8 xl:py-4.5 bg-[#F58A07] rounded-[31px]">
                <Link to="/services" className="text-white">
                  See our services
                </Link>
              </button>

              <Link to="/services" className="text-link xl:hover:underline xl:hover:decoration-[#F58A07] xl:hover:text-[#F58A07] duration-150">
                See All Services
              </Link>
            </div>

            <div className="mt-4 xl:mt-8">
              <p className="text-[1rem] text-[#394149]/50">Worked with 100+ Companies</p>

              <div className="flex items-center gap-2.5 xl:gap-12 mt-3.5 xl:mt-4.5">
                <img src="../src/assets/images/vector-1.svg" alt="" className="w-22.5 h-auto lg:w-auto"/>
                <img src="../src/assets/images/vector-2.svg" alt="" className="w-22.5 h-auto lg:w-auto"/>
                <img src="../src/assets/images/vector-3.svg" alt="" className="w-22.5 h-auto lg:w-auto"/>
              </div>
            </div>
          </section>

          <section className="w-full h-62.5 md:h-90 xl:h-161.25 items-end flex relative">
            <img src="../src/assets/images/home-header-banner.png" alt="" className="object-cover xl:h-150"/>
            <div className="absolute bottom-0 right-8.75 -z-10 h-22.5 w-20 xl:h-60.25 xl:w-38.75 bg-[#F58A07] rounded-t-[10px] xl:rounded-t-[25px]"/>
            <div className="absolute bottom-0 left-6.25 h-37.5 w-25 xl:h-92.5 xl:w-45.25 bg-[#F58A07]/45 rounded-t-[10px] xl:rounded-t-[25px]"/>
          </section>
        </header>
      </Container>
    </div>
  );
}

export default HomeHeader;
