
function Stats({ stat, title }: {stat: number, title: string}) {
  return (
    <div>
      <p className="text-[26px] xl:text-[36px] font-bold text-[#F58A07]">+{stat}</p>
      <h3 className="text-[18px] xl:text-[24px] font-semibold text-[#0D1317]">
        {title}
      </h3>
      <p className="text-[14px] xl:text-[16px] font-medium text-[#5B5B5B]">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscin. Curabitur
        <br />
        sit amet eros elit et.
      </p>
    </div>
  );
}

export default Stats;
