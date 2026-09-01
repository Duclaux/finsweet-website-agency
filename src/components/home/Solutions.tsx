import Container from "../Container"
import SolutionCard from "./SolutionCard"

function Solutions() {
  return (
    <div className="bg-[#EDF7FF] py-24">
      <Container>
        <div className="xl:flex xl:justify-between mb-12">
            <h1 className="text-h1">
                We are building software solution that solves your business challenges
            </h1>
            <p className="text-paragraph text-[#5B5B5B] mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
            </p>
        </div>

        <div className="w-fit mx-auto space-y-12 xl:space-y-0 xl:w-full xl:flex xl:items-center xl:justify-between">
            <SolutionCard icon="../src/assets/images/invocing.svg" title="Invoicing"/>
            <SolutionCard icon="../src/assets/images/support.svg" title="Support"/>
            <SolutionCard icon="../src/assets/images/surveying.svg" title="Surveying"/>
        </div>
      </Container>
    </div>
  )
}

export default Solutions
