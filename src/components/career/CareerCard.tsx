import { Link } from "react-router-dom"

function CareerCard({title}: {title: string}) {
  return (
    <div className="bg-[#C1E4FF]/60 py-8 px-10 rounded-[20px] w-full">
      <h1 className="text-[24px] font-medium text-[#0D1317] mb-2">
        {title}
      </h1>
      <p className="text-[18px] text-[#394149]/60 mb-8">
        Bengaluru · Full Time 
      </p>

      <Link to="" className="text-[#F58A07] text-[18px]">
        Apply Now
      </Link>
    </div>
  )
}

export default CareerCard
