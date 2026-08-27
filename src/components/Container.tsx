
function Container({children} : any) {
  return (
    <div className="border-2 border-amber-300 m-auto max-w-87.5 sm:max-w-125 md:max-w-175 lg:max-w-[950px]: xl:max-w-300 2xl:max-w-[1300px]">
      { children }
    </div>
  )
}

export default Container
