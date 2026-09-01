import CircularBadge from "../CircularBadge";
import Container from "../Container";

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
              <div>
                <p className="text-[26px] xl:text-[36px] font-bold text-[#F58A07]">15+</p>
                <h3 className="text-[18px] xl:text-[24px] font-semibold text-[#0D1317]">
                  Awards received
                </h3>
                <p className="text-[14px] xl:text-[16px] font-medium text-[#5B5B5B]">
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscin. Curabitur
                  <br />
                  sit amet eros elit et.
                </p>
              </div>

              <div>
                <p className="text-[26px] xl:text-[36px] font-bold text-[#F58A07]">500+</p>
                <h3 className="text-[18px] xl:text-[24px] font-semibold text-[#0D1317]">
                  Clients served
                </h3>
                <p className="text-[16px] font-medium text-[#5B5B5B]">
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscin. Curabitur
                  <br />
                  sit amet eros elit et.
                </p>
              </div>
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
