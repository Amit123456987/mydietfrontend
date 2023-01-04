import "../App";
import Card from "./Card";

function Main(props) {
  
  return (
    <div className="ms-auto" style={{ display: "flex", flexWrap: "wrap" }}>
      {
        props.foodList.map(
          (name,index)=>{
            return <Card
            index={index} FoodSample={props.foodList[index]} />;
          }
        )
      }
    </div>
  );
}

export default Main;