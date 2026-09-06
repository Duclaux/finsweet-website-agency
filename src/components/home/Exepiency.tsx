import CircularBadge from "../CircularBadge";
import Container from "../Container";
import Stats from "../Stats";

function Exepiency() {
  return (
    <div className="py-30">
      <Container>
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between">
          <div>
            <h1 className="text-h1">
              The energy of a start-up
              <br />
              combined with 30 years
              <br />
              of experience.
            </h1>
            <p className="text-[12px] xl:text-[18px] font-medium text-[#5B5B5B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Curabitur sit amet eros blandit, hendrerit elit et, mattis
              <br />
              purus. Vivamus commodo suscipit tellus et
              <br />
              pellentesque.
            </p>

            <div className="mt-12 flex items-center justify-between space-x-10">
              <Stats title="Awards received" stat={15}/>
              <Stats title="Clients served" stat={500}/>
            </div>
          </div>

          <div className="relative">
            <img src="../src/assets/images/exp-image.png" alt="" />
            <div className="absolute -top-15 -right-15 hidden xl:flex">
                <CircularBadge text="Best agency 2020 - 2021 | london" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Exepiency;
