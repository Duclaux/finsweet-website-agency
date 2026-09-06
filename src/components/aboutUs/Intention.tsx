import Container from "../Container"

function Intention() {
  return (
    <Container>
      <div className="mb-30 space-y-5 xl:space-y-0 xl:flex xl:flex-row-reverse items-center justify-between">
        <img src="../src/assets/images/about-Image.png" alt=""/>

        <div>
            <h1 className="text-h1">
                We want to get local identification in every corner of the world in this era of global citizenship.
            </h1>

            <p className="text-paragraph text-[#5B5B5B] mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
            </p>
        </div>
      </div>
    </Container>
  )
}

export default Intention
