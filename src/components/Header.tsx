import React from "react";
import Button from "./Button";
import {FiSettings} from 'react-icons/fi'
const Header: React.FC = () => {
  return <div className="flex items-center justify-between mb-5">
    <h1 className="text-2xl font-bold text-white  tracking-wide">Promofocus</h1>
    <Button OnClick={()=> console.log("clicked")}>
      <FiSettings/> Settings
    </Button>
  </div>;
};

export default Header;
