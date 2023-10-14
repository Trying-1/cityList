import React, { useState } from "react";

const Citylist = (props) => {
  const citylist = props.citylist;
  const remove = (index) => {
    const newlist = [...citylist];
    newlist.splice(index, 1);
    props.updateCitylist(newlist);
  };
  return (
    <div>
      {citylist.map((city, index) => (
        <div key={index}>
          <h2>{city}</h2>
          <button onClick={() => remove(index)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default Citylist;
