import ProgressBar from "../ProgressBar";
import Timer from "../Timer";

const Main = () => {
  return (
    <div className="w-full">
      <ProgressBar progress={90} />
      <Timer />
    </div>
  );
};

export default Main;
