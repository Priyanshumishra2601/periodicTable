import React from "react";
import data from "@/Components/PeriodicTable.json"
import "./PeriodicTable.css";


const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#ED9ED6",
  "diatomic nonmetal": "#9ADE7B",
  "alkali metal": "#FF9130",
  "transition metal": "#A6FF96",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};


const PeriodicTable = () => {
  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <div
          className="element"
          key={element.name}
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            borderColor: colorMap[element.category],
            background: colorMap[element.category]
          }}
        >
          <strong>{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </div>
      ))}

    </div>
  );
};

export default PeriodicTable;