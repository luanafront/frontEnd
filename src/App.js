import React from 'react';
import axios from 'axios';
import './App.css';
import ProductGrid from './components/productGrid';
import FilterGrid from './components/filterGrid';

function App() {
const [dataApi, setDataApi] = React.useState([])
const [dataCategories, setDataCategories] = React.useState([])
const [filterData, setFilterData] = React.useState([])

function getApiData() {
  axios.get("https://fakestoreapi.com/products").then(({data}) => {
    setDataApi(data)
    let categories = []
    for(let i = 0; i < data.length; i++){
      let item = data[i]
      let {category} = item 

      let isNewCategory = categories.includes(category) === false 
      if(isNewCategory){
        categories.push(category)
      }
    }
    setDataCategories(categories)
  }) 
}

function filterByCategory (event) {
  let filterParam = event.target.outerText
  setFilterData(dataApi.filter(item => item.category === filterParam))
}

function resetFilters (){
  setFilterData([])
}

React.useEffect(getApiData, [])
  return (
    <div className="App">
      <FilterGrid 
        label="Filtrar por categoria" 
        filters={dataCategories} 
        action={filterByCategory} 
        removeFiltersAction={resetFilters}
      />
      <ProductGrid data={filterData.length !== 0 ? filterData : dataApi}/>
    </div>
  );
}

export default App;
