import CardBlogs from "../components/CardBlogs"
import Container from "../components/Container"

function LastestBlogNews() {
  return (
    <div className="bg-[#EDF7FF] py-24">
      <Container>
        <h1 className="text-h1">
            Latest Blog & News
        </h1>

        <div className="mt-8 xl:mt-16 space-y-12 md:w-fit md:mx-auto xl:w-full xl:space-y-0 xl:flex items-center justify-between">
          <CardBlogs img="../src/assets/images/card-blog-bg-1.png" title="Business strategy"/>
          <CardBlogs img="../src/assets/images/card-blog-bg-2.png" title="Digitalization"/>
          <CardBlogs img="../src/assets/images/card-blog-bg-3.png" title="Risk assessment"/>
        </div>
      </Container>
    </div>
  )
}

export default LastestBlogNews
