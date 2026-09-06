import Container from "../Container";
import Stats from "../Stats";

function Statistics() {
  return (
    <Container>
      <div className="my-30">
        <div className="space-y-3 xl:space-y-0 xl:flex xl:justify-between mb-5 xl:mb-8">
          <h1 className="text-h1">
            The energy of a start-up combined with 30 years of experience
          </h1>

          <p className="text-paragraph text-[#5B5B5B] mt-6 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>

        <div className="w-full flex flex-col text-center xl:text-start items-center justify-center space-y-5 xl:space-y-0 xl:flex-row xl:justify-between">
            <Stats title="Awards received" stat={15}/>
            <Stats title="Awards received" stat={500}/>
            <Stats title="Employees" stat={34}/>
            <Stats title="Custom solutions" stat={130}/>
        </div>
      </div>
    </Container>
  );
}

export default Statistics;
