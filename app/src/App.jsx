import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import SearchResult from "./componenet/searchResult";

 export const BASE_URL="http://localhost:9000";
const App = () => {
  const[datas,newdatas]=useState()
 const [data,setData]=useState();
 const [filterData,setFilterData]=useState();
const [loading,setLoading]=useState(false);
const [errror,setError]=useState();
const [selectedButton,setSelectedButton]=useState("all");
  const FetchFoodData= async ()=>{
    setLoading(true);
  try{
     const responce=await fetch(BASE_URL);
 
   const json=await responce.json();
   setData(json);
   setFilterData(json)
   setLoading(false);
  }catch (error){
    setError("Unable To Fetch Data");
  }
      
  }

  useEffect(() => {
     FetchFoodData();
}, []);
 
if (errror) return <div>{errror}</div>
if (loading) return <div>loading...</div>

const searchFood=(e)=>{
const searchValue=e.target.value;
console.log(searchValue);
if (searchValue==""){
  setFilterData(null)
}
const Filter=data.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()));
console.log("filter",Filter);
setFilterData(Filter)
}
const FilterFood=(type)=>{
if (type==="all"){
  setFilterData(data);
  setSelectedButton("all");
 
  return;
}
const Filter=data.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()));
setFilterData(Filter);
setSelectedButton(type);

}
  return <>
  <Maincontainer>
    <Topsection>
      <div className="logo">
        <img src="/images/Foody Zone.svg" alt="" />
      </div>
      <div className="search">
        <input onChange={searchFood} type="text" placeholder="search Food..." />
      </div>
    </Topsection>
    <Filtercomponent>
      <Button selectedButton={selectedButton=="all"} onClick={()=>FilterFood("all")}>All</Button>
       <Button selectedButton={selectedButton=="breakfast"}  onClick={()=>FilterFood("breakfast")} >BreakFast</Button>
        <Button selectedButton={selectedButton=="lunch"}  onClick={()=>FilterFood("lunch")} >Lunch</Button>
         <Button selectedButton={selectedButton=="dinner"}  onClick={()=>FilterFood("dinner")} >Dinner</Button>
    </Filtercomponent>
  </Maincontainer>
   <SearchResult data={filterData}></SearchResult></>
};

export default App;

// header section 
 export const Maincontainer=styled.div`
width:1280px;

margin: 0 auto;
`
const Topsection=styled.section`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search{
      input{
            background: transparent;
    height: 40px;
    border: 2px solid red;
    border-radius: 5px;
    margin-right: 100px;
    padding: 0 10px;
    color: white;
    font-size: 20px;
      }
    }
    .logo{
      margin-left: 100px;
    }
`

const Filtercomponent=styled.div`
      display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
`
 export const Button=styled.button`
  background-color: ${({selectedButton})=>(selectedButton?"blue":"#FF4343")};
  border-radius: 5px;
  padding: 6px 12px;
  color: white;
  border: none;
  cursor: pointer;
  &&:hover{
    background-color:red;
  }
`
// header section end




