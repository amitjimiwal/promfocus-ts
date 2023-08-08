interface Props{
         OnClick:()=> void;
         active:boolean;
}
const TimerButton = ({ OnClick, active }:Props) => {
  return (
    <div className="flexproperty my-5" onClick={OnClick}>
      <div className="cursor-pointer bg-white w-48 text-red-500 font-semibold text-2xl  flexproperty p-2 rounded-xl">
        {active ? "START" : "Stop"}
      </div>
    </div>
  );
};

export default TimerButton;
