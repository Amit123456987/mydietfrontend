import { useState } from "react";
import "../App.css";

function Nutrient(props) {
  return (
    <div>
      <div className="btn-group">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          Nutrients
        </button>
        <ul className="dropdown-menu">
          {props.ListOfNutrients.map((name,index) => {
            return (
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    return props.ReturnFilter(props.ListOfNutrients[index]);
                  }}
                >
                  {props.ListOfNutrients[index]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Nutrient;
