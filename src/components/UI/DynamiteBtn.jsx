const DynamiteBtn = ({children}) => {
  return (
    <button className="flex items-center space-x-3 px-16 py-3 bg-orange-100 text-white text-[12px]
    rounded hover:bg-orange-300 duration-500
    ">{children}</button>
  )
}

export default DynamiteBtn