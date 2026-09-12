import { Link } from "react-router-dom"
import Container from "../Container"

function BlogHero() {
  return (
    <div className="flex-1 min-h-0 h-full w-screen xl:bg-[#DCEAF5] -z-20 py-10 xl:py-20 mb-50 xl:mb-30">
      <Container>
         <header className="xl:flex xl:items-center space-y-3 xl:space-y-0">
          <section className="w-full h-fit md:h-90">
            <div>
               <div className="mt-10 flex gap-2 items-center">
                  <img src="../src/assets/images/profile-img.png" alt="" className="w-8 h-8"/>
                  <div className="space-y-1 flex gap-3">
                      <p className="font-medium text-[16px] text-[#394149]">Chikelu Neo</p>
                      <p className="font-medium text-[16px] text-[#394149]">CEO at MazeAI</p>
                  </div>
              </div>
            </div>
            <h1 className="text-h1">
              Our internal process and longerm vision
            </h1>

            <p className="text-paragraph text-[#5B5B5B] mt-6 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
            </p>

            <button className="text-link px-5 py-3 xl:px-8 xl:py-4.5 bg-[#F58A07] rounded-[31px]">
                <Link to="/blog" className="text-white">
                  Work With Us
                </Link>
              </button>
          </section>

          <section className="w-full h-62.5 md:h-154 xl:h-162.5 xl:flex xl:justify-center">
            <img src="../src/assets/images/blog-img-header.png" alt="" className="w-full object-contain"/>
          </section>
         </header>
      </Container>
    </div>
  )
}

export default BlogHero
