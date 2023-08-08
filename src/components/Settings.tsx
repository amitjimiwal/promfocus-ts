import { GrClose } from "react-icons/gr";
import { LuTimer } from "react-icons/lu";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { opensettings } from "../redux/slice/timerslice,";
const SettingsHeader = () => {
  const dispatch=useDispatch<AppDispatch>();
  return (
    <>
      <h4 className="text-xl">Settings</h4>
      <div
        onClick={() => dispatch(opensettings())}
        className="text-2xl cursor-pointer text-settingscolor font-bold"
      >
        <GrClose />
      </div>
    </>
  );
};
const Button = () => {
  const dispatch=useDispatch<AppDispatch>();
  return (
    <button className=" bg-black px-4 py-2 object-contain text-white font-bold rounded-xl" onClick={()=> dispatch(opensettings())}>
      {" "}
      OK
    </button>
  );
};
const Settings = () => {
  const { modes ,longBreakInterval} = useSelector((state: RootState) => state.timer);
  return (
    <>
      <div className="p-4 bg-white rounded-t-xl">
        <div className="flexproperty justify-between">
          <SettingsHeader />
        </div>
        <div className="flexproperty justify-start gap-2 text-lg text-gray-400 my-3">
          <LuTimer />
          TIMER
        </div>
        <div className="my-3">
          <h1>Time (minutes)</h1>
          <div className="flexproperty justify-between">
            {Object.values(modes).map(({id,label,time})=>
            <Input id={id} label={label} value={time} type="number" name={label} min={1}/>)}
          </div>
        </div>
        <div className="flexproperty justify-between my-5">
          <h5>Long Break Interval</h5>
          <Input
            id="Long Break Interval"
            type="number"
            name="longbreakinterval"
            value={longBreakInterval}
            min={1}
          />
        </div>
      </div>
      <div className="bg-settingscolor p-5 text-right rounded-b-xl">
        <Button />
      </div>
    </>
  );
};

export default Settings;
