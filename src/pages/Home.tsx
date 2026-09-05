import BlogCards from "../components/home/BlogCards"
import Exepiency from "../components/home/Exepiency"
import HomeHeader from "../components/home/HomeHeader"
import Solutions from "../components/home/Solutions"
import Service from "../components/home/Service"
import NewsBlock from "../components/home/NewsBlock"
import Video from "../components/home/Video"

function Home() {
  return (
    <>
      <HomeHeader />
      <BlogCards />
      <Solutions />
      <Exepiency />
      <Service />
      <NewsBlock />
      <Video />
    </>
  )
}

export default Home
