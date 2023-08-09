import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Settings from "./components/Settings";
import { RootState } from "./redux/store";
function App() {
  const { settingsopen ,modes,mode} = useSelector((state: RootState) => state.timer);
  return (
    <div className={`${settingsopen ? 'bg-opacity-75': ''} w-full h-screen flex justify-center  bg-[${modes[mode].color}] transition-colors`}>
      <div className={`${settingsopen ? 'bg-opacity-25': ''}  h-screen p-4 w-full sm:max-w-2xl`}>
        <Header />
        <Main />
        {settingsopen && <Settings />}
      </div>
    </div>
  );
}

export default App;
