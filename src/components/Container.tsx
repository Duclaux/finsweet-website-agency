
function Container({children} : any) {
  return (
    <div className="border-2 border-amber-300 mx-auto max-w-87.5 sm:max-w-125 md:max-w-175 lg:max-w-[950px]: xl:max-w-300 2xl:max-w-325">
      { children }
    </div>
  )
}

export default Container
