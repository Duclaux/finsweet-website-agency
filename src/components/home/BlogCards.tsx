import CardBlogs from "../CardBlogs"
import Container from "../Container"

function BlogCards() {
  return (
    <Container>
      <div className='text-2x mt-12.5 xl:mt-22.5'>
        <div>
          <h1 className="text-h1">
            We help more than 1500<br className="hidden xl:flex"/>companies from all sectors
          </h1>

          <p className="text-paragraph text-[#5B5B5B] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros<br className="hidden xl:flex"/> blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et<br className="hidden xl:flex"/>pellentesque.
          </p>
        </div>

        <div className="mt-8 xl:mt-16 flex items-center justify-between">
          <CardBlogs img="../src/assets/images/card-blog-bg-1.png" title="Business strategy"/>
          <CardBlogs img="../src/assets/images/card-blog-bg-2.png" title="Digitalization"/>
          <CardBlogs img="../src/assets/images/card-blog-bg-3.png" title="Risk assessment"/>
        </div>
      </div>
    </Container>
  )
}

export default BlogCards
