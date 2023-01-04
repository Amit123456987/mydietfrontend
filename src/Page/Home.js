import "../App.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Main from "../components/Main";
import { FetchfoodServices } from "../services/foodServices";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "bootstrap";
import Navbar from "../components/NavBar/navbar";


let WholeRowWiseListOfFoodAndNutrition = []

async function sortLists(){
  let WholeRowWiseListOfFoodAndNutrition = [];
  let ListOfFoodLabels = await axios.get("/" + 1);

  for (let i = 1; i <= 14165 ; i += 1) {
    let LabelAndNutritionValue = {};
    let ListofFoodNutrition = await axios.get("/" + i);

    for (
      let ColumnIndex = 0;
      ColumnIndex < ListOfFoodLabels.data.length;
      ColumnIndex += 1
    ) {
      let FoodLabel = ListOfFoodLabels.data[ColumnIndex];
      let NutritiousValue = ListofFoodNutrition.data[ColumnIndex];

      LabelAndNutritionValue[FoodLabel] = NutritiousValue;
    }
    WholeRowWiseListOfFoodAndNutrition.push(LabelAndNutritionValue);
  }
  WholeRowWiseListOfFoodAndNutrition.sort(function(a, b) { 
    return a.speed - b.speed;
})
}

async function getListOfLabels() {
  let ListOfFoodLabels = await axios.get("/" + 1);
  return ListOfFoodLabels.data;
}

async function ChangeFoodList(startRow, endRow) {
  let RowWiseListOfFoodAndNutrition = [];
  let ListOfFoodLabels = await axios.get("/" + 1);

  for (let i = startRow; i <= endRow; i += 1) {
    let LabelAndNutritionValue = {};
    let ListofFoodNutrition = await axios.get("/" + i);

    for (
      let ColumnIndex = 0;
      ColumnIndex < ListOfFoodLabels.data.length;
      ColumnIndex += 1
    ) {
      let FoodLabel = ListOfFoodLabels.data[ColumnIndex];
      let NutritiousValue = ListofFoodNutrition.data[ColumnIndex];

      LabelAndNutritionValue[FoodLabel] = NutritiousValue;
    }
    RowWiseListOfFoodAndNutrition.push(LabelAndNutritionValue);
  }

  return RowWiseListOfFoodAndNutrition;
}



function returnSelected(name){
  return name;
}

function Home() {
  let [foodList, setfoodList] = useState([]);
  const [start, setStart] = useState(2);
  const [end, setEnd] = useState(25);
  let [ListOfFoodLabels, setListOfFoodLabels] = useState([]);

  useEffect(() => {
    
    getListOfLabels().then((data) => {
      ListOfFoodLabels = [...data];
      setListOfFoodLabels(ListOfFoodLabels);
    });

    ChangeFoodList(start, end).then((data) => {
      foodList = [...data];
      console.log(foodList);
      setfoodList(foodList);
    });

  }, []);

  useEffect(() => {
    ChangeFoodList(start, end).then((data) => {
      foodList = [...data];
      setfoodList(foodList);
    });
  }, [start, end]);


  let paginationStrip = [];
  let rows = [];

  for (let i = 0; i < 44; i += 1) {
    paginationStrip.push(i);
  }

  for (let i = 0; i < 24; i++) {
    rows.push(<Card key={i}/>);
  }

  return (
    <div>
      <Header ReturnFilter={returnSelected} ListOfNutrients={ListOfFoodLabels} />
      <Main foodList={foodList}/>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {paginationStrip.map((index) => {
            if (index === 0)
              return (
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
              );
            else if (index === 43)
              return (
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              );

            return (
              <li key={index} className="page-item">
                <button
                  className="page-link"
                  onClick={(e) => {
                    setStart(2 + 24 * (index - 1));
                    setEnd(25 + 24 * (index - 1)); 
                  }}
                >
                  {index}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Home;
