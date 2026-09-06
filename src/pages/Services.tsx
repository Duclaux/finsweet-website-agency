import Container from "../components/Container"
import Video from "../components/home/Video"
import HeaderBanner from "../components/service/HeaderBanner"
import ServiceCard from "../components/service/ServiceCard"
import LastestBlogNews from "./LastestBlogNews"

function Services() {
  return (
    <>
      <HeaderBanner />
      <Container>
        <div className="space-y-5 xl:space-y-10 w-fit mx-auto xl:w-full">
          <ServiceCard 
            img="../src/assets/images/service-1.png" 
            title="Business strategy"
            reserveStyle=""
          />
          <ServiceCard 
            img="../src/assets/images/service-2.png" 
            title="Digitalization"
            reserveStyle="xl:flex-row-reverse"
          />
          <ServiceCard 
            img="../src/assets/images/service-3.png" 
            title="Risk assessment"
            reserveStyle=""
          />
          <ServiceCard 
            img="../src/assets/images/service-4.png" 
            title="Artificial intelligence"
            reserveStyle="xl:flex-row-reverse"
          />
          <ServiceCard 
            img="../src/assets/images/service-5.png" 
            title="Smart Contracts"
            reserveStyle=""
          />
        </div>
      </Container>
      <Video />
      <LastestBlogNews />
    </>
  )
}

export default Services
