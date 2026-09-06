import Container from "../Container"

function Video() {
  return (
    <Container>
      <div className="flex flex-col-reverse xl:flex-row xl:items-center xl:justify-around my-25 xl:my-32">
        <div>
            <h1 className="text-h1">
                Finsweet was a dream<br/> to work with
            </h1>
            <p className="text-[18px] font-medium text-[#5B5B5B] mt-6">
                Maecenas efficitur scelerisque lorem, et varius lacus<br/> tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis<br/> vel vel orci. Vivamus eleifend nec felis vel auctor.
            </p>

            <div className="mt-10 flex gap-8 items-center">
                <img src="../src/assets/images/profile-img.png" alt="" />
                <div className="space-y-1">
                    <p className="font-medium text-[24px]">Chikelu Neo</p>
                    <p className="font-medium text-[18px] text-[#F58A07]">CEO at MazeAI</p>
                </div>
            </div>
        </div>
        <div className="relative w-full h-fit mb-6 xl:mb-0 xl:w-155 xl:h-fit">
            <video
                src="../src/assets/images/3246669-uhd_3840_2160_25fps.mp4" 
                autoPlay
                className="rounded-[20px]"
                controls
            ></video>
        </div>
      </div>
    </Container>
  )
}

export default Video
