import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SinglePage = () => {
  let { id } = useParams();
  let location = useLocation();
  console.log(location);

  return (
    <>
      <div>
        {Object.keys(location.state.FoodSample).map(function (key) {
          if( key.length == 0 || key == "ImageLinks" )
            return <span></span>;
          return <div>{key} : {location.state.FoodSample[key]}</div>;
        })}
      </div>
    </>
  );
};

export default SinglePage;
