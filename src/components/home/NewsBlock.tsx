
function NewsBlock() {
  return (
    <div className="xl:flex mt-25 xl:mt-32">
      <div className="w-full">
        <img src="../src/assets/images/news-img.png" alt="" className="h-100 w-full"/>
      </div>

      <div className="bg-[#F58A07] text-center py-15 xl:text-start xl:pl-20 xl:py-0 xl:flex xl:flex-col w-full xl:justify-center">
        <h1 className="text-h1 text-white">
            Energy of a start-up<br className="hidden xl:flex" />combined with 30<br className="hidden xl:flex" />years of experience.
        </h1>
        <button className="bg-white py-4 px-8 text-[15px] rounded-[31px] text-[#F58A07] font-semibold mt-10 w-fit">
            See Job Vacancies
        </button>
      </div>
    </div>
  )
}

export default NewsBlock
