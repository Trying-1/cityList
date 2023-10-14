import React, { useState } from "react";
const Input = (props) => {
  const [city, setCity] = useState("");
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      props.getcity(city);
      setCity("");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the city"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Input;
