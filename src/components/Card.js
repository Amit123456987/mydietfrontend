import "../App.css";
import { Link } from "react-router-dom";

function Card(props) {
  let id = props.ID;

  return (
    <div
      className="card"
      style={{ width: "18rem", height: "27rem", margin: "10px" }}
    >
      <div className="card-body text-center">
        <h4 className="card-title"> {`${props.FoodSample["Name"]}\n`}</h4>
        <p className="card-text">
          <img src={props.FoodSample["ImageLinks"]}></img>
          <br></br>
          {`Calories :   ${props.FoodSample["Calories"]}\n`}
          <br></br>
          {`Fat (g) : ${props.FoodSample["Fat (g)"]}\n`}
          <br></br>
          {`Protein (g) : ${props.FoodSample["Protein (g)"]}\n`}
          <br></br>
          {`Carbohydrate (g) : ${props.FoodSample["Carbohydrate (g)"]}\n`}
        </p>

        <button className="btn btn-primary" onClick={() => {}}>
          Add
        </button>

        <br></br>

        <Link
        to={`/SinglePage/${id}`}
        state={props}
      >
        <button className="btn btn-primary" onClick={() => {}}>
        See Details
        </button>
      </Link>

      </div>
    </div>
  );
}

export default Card;
