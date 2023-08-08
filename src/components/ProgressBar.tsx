interface Props{
  progress:number
}
const ProgressBar = ({progress}:Props) => {
  return (
    <div className="w-full h-1 bg-loaderbg rounded-xl ">
      {/* child div  */}
      <div className={`h-full bg-white`} style={{width:`${progress}%`}}>
      </div>
    </div>
  )
}

export default ProgressBar
