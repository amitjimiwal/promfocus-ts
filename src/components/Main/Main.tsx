import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "../ProgressBar";
import Timer from "../Timer";
import { AppDispatch, RootState } from "../../redux/store";
import { useCallback, useEffect } from "react";
import { increaseRound, setMode } from "../../redux/slice/timerslice,";
import { LONG_BREAK, POMODORO, SHORT_BREAK } from "../../constant";
import useCountdown from "../../hooks/useCountdown";
import { updateTitle } from "../../utils/utilityfunction";

const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { modes, mode } = useSelector((state: RootState) => state.timer);
  const {ticking, start, stop, reset, timeLeft, progress} =useCountdown({
    onStart:()=>{
    },
   minutes:modes[mode].time,
   onComplete:()=>{
       next()
   },
   onStop:()=>{

   }
   })
   const jumpTo = useCallback(
    (id:string) => {
      reset();
      dispatch(setMode(id));
    },[dispatch, reset]);
  const next = useCallback(() => {
    switch (mode) {
      case LONG_BREAK:
      case SHORT_BREAK:
        jumpTo(POMODORO);
        break;
      default:
        jumpTo(SHORT_BREAK);
        dispatch(increaseRound());
        break;
    }
  }, [dispatch, jumpTo, mode]);
  useEffect(() => {
    updateTitle(timeLeft,mode)
  }, [mode,timeLeft]);
  
  return (
    <div className="w-full">
      <ProgressBar progress={progress} />
      <Timer time={timeLeft} next={next} start={start} stop={stop} ticking={ticking}/>
    </div>
  );
};

export default Main;
