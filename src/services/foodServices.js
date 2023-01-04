import axios from 'axios';
import '../App.css';
import { createContext, useContext, useEffect, useReducer } from "react";


export async function FetchfoodServices() {
    return axios.get("http://localhost:8000/1");
}


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

const AppContext = createContext();

const AppProvider = ({ children }) => {

  // my 2nd api call for single product

//   const getSingleProduct = async (url) => {
//     const res = await axios.get(url);
//     const singleProduct = await res.data;
//   };

  useEffect(() => {
    // getProducts(API);
  }, []);

  useEffect(()=>{

  },[])

  return (
    <AppContext.Provider value={{ }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };