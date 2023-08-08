import ModeButton from "./ModeButton"
import NextButton from "./NextButton"
import TimerButton from "./TimerButton"

const Timer = () => {
  return (
    <div className="p-4 bg-bgbutton mt-8">
      <div className="flexproperty justify-between">
        <ModeButton active={false} OnClick={()=> console.log("togglemode")}>
         Pomodoro
        </ModeButton>
        <ModeButton active={true} OnClick={()=> console.log("togglemode")}>
         Short Break
        </ModeButton>
        <ModeButton active={false} OnClick={()=> console.log("togglemode")}>
         LongBreak
        </ModeButton>
      </div>
      <div className="text-8xl text-center my-10 text-white font-bold tracking-wider">
         01:00
      </div>
     <div className="flexproperty gap-4">
         <TimerButton active={true} OnClick={()=> console.log("start button")}/>
         <NextButton OnClick={()=> console.log("next button")}/>
     </div>

    </div>
  )
}

export default Timer
