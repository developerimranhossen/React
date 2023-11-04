import {
  BeakerIcon,
  Bars3Icon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/solid";
import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => setIsOpen(!isOpen);
  console.log(isOpen);
  return (
    <>
      <div onClick={clickHandler} className="text-">
        <Bars3BottomLeftIcon className={`h-6 w-6 bg-slate-100 rounded-full text-red-500 ${ isOpen ? 'bg-rd-700' : 'bg-gray-700'}`} />
      </div>
      <div className={`${isOpen ? 'bg-green-500' : 'bg-blue-500'}`}>ff</div>
    </>
  );
}

export default App;
