import { ReactNode } from "react"

interface Props{
         children:ReactNode;
         active:boolean;
         OnClick:()=>void;
}
const ModeButton = ({children,active,OnClick}:Props) => {
  return (
    <div onClick={OnClick} className={`text-white font-semibold p-2 w-28 flex justify-center items-center rounded-lg  cursor-pointer ${active ? 'bg-modebackground' : ''}`}>
      {children}
    </div>
  )
}

export default ModeButton
