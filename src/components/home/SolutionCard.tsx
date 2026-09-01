function SolutionCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="bg-white rounded-[20px] py-9.25 px-6.5 w-fit">
      <img src={icon} alt="" />
      <h3 className="mt-8 mb-4 text-[24px] font-semibold">{title}</h3>
      <p className="text-[16px] font-medium text-[#5B5B5B]">
        Lorem ipsum dolor sit amet, consectetur
        <br />
        adipiscing elit. Curabitur sit amet eros
        <br />
        blandit, hendrerit elit et.
      </p>
    </div>
  );
}

export default SolutionCard;
