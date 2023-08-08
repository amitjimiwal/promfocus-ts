import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Settings from "./components/Settings";
import { RootState } from "./redux/store";
function App() {
  const { settingsopen } = useSelector((state: RootState) => state.timer);
  return (
    <div className="w-full h-screen flex justify-center bg-red-300">
      <div className=" h-screen p-4 bg-red-300 w-full sm:max-w-2xl">
        <Header />
        <Main />
        {settingsopen && <Settings />}
      </div>
    </div>
  );
}

export default App;
