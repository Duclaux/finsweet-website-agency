import { Link } from "react-router-dom";
import Container from "../Container";
import { ArrowRight } from "lucide-react";

function Service() {
  return (
    <Container>
      <div className="bg-[#EDF7FF] p-12 rounded-[20px] relative">
        <div className="absolute -top-3.25 -right-3.25">
          <img src="../src/assets/images/Ribbon.png" alt="" className="w-30"/>
        </div>
        <div className="grid-rows-3 space-y-5 xl:space-y-0 xl:space-x-5 items-center gap-2 mb-10">
              <button className="text-[#F58A07] font-semibold text-[16px] w-full xl:w-fit py-2 px-6 bg-white rounded-[31px]">
                Business strategy
              </button>

              <button className="text-[#063255]/30 font-semibold text-[16px] w-full xl:w-fit py-2 px-6 border border-[#A8BCCC] rounded-[31px]">
                Digitalization
              </button>

              <button className="text-[#063255]/30 font-semibold text-[16px] w-full xl:w-fit py-2 px-6 border border-[#A8BCCC] rounded-[31px]">
                Risk assessment
              </button>
            </div>
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between">
          <div>
            <div>
                <h1 className="text-h1">
                    Helping clients with<br/>research and strategy<br/>for their business
                </h1>
                <p className="text-[12px] xl:text-[18px] font-medium text-[#5B5B5B] mt-6.5 mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Curabitur sit amet eros blandit, hendrerit elit et, mattis<br/>purus. Vivamus commodo suscipit tellus et<br/>pellentesque. 

                    Mattis purus. Vivamus commodo suscipit tellus et<br/>pellent. Curabitur sit amet eros blan esque. 
                </p>

                <Link to="/" className="flex items-center gap-2 text-[#F58A07]">
                    See all services <ArrowRight size={25} color="#F58A07" />
                </Link>
            </div>
          </div>

          <div>
            <img src="../src/assets/images/Service-image.png" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Service;
