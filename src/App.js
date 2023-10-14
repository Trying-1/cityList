import "./styles.css";
import Input from "./component/Input";
import Citylist from "./component/Citylist";
import { useState } from "react";

export default function App() {
  const [citylist, setCitylist] = useState([]);

  const getcity = (city) => {
    setCitylist([city, ...citylist]);
  };
  return (
    <div className="App">
      <Input getcity={getcity} />
      <Citylist citylist={citylist} />
    </div>
  );
}
