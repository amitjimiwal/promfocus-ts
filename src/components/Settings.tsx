import { GrClose } from "react-icons/gr";
import { LuTimer } from "react-icons/lu";
import Input from "./Input";
const SettingsHeader = () => {
  return (
    <>
      <h4 className="text-xl">Settings</h4>
      <div
        onClick={() => console.log("close setting")}
        className="text-2xl cursor-pointer text-settingscolor font-bold"
      >
        <GrClose />
      </div>
    </>
  );
};
const Button = () => {
  return (
    <button className=" bg-black px-4 py-2 object-contain text-white font-bold rounded-xl">
      {" "}
      OK
    </button>
  );
};
const Settings = () => {
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
            <Input
              id="pomodoro"
              label="pomodoro"
              type="number"
              name="pomodoro"
              value={25}
              min={1}
              onChange={() => console.log("onchngwe")}
            />
            <Input
              id="Short break"
              label="Short break"
              type="number"
              name="pomodoro"
              value={25}
              min={1}
              onChange={() => console.log("onchngwe")}
            />
            <Input
              id="Long Break"
              label="Long Break"
              type="number"
              name="pomodoro"
              value={25}
              min={1}
              onChange={() => console.log("onchngwe")}
            />
          </div>
        </div>
        <div className="flexproperty justify-between my-5">
          <h5>Long Break Interval</h5>
          <Input
            id="Long Break Interval"
            type="number"
            name="longbreakinterval"
            value={4}
            min={1}
            onChange={() => console.log("onchngwe")}
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
