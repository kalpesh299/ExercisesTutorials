/* eslint-disable */
import { useEffect } from 'react';
import './App.css';
import { Gallery } from './components/Gallery';
import { Nav } from './components/Nav';
import axios from 'axios';
import { Card } from './components/Card';
import { useState } from 'react';
function App() {
const[exercisedata,setexercisedata]=useState([]);
const[search,setsearch]=useState("");
const[filteredata,setfilterdata]=useState([]);
const[count,setcount]=useState(9);

console.log(count);
useEffect(()=>{
  const getData=async()=>{
         const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: count},
  headers: {
    'X-RapidAPI-Key': 'f29dd72edbmsh97113ab990ccb5fp1ffb87jsn3068bca06d4d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
  setexercisedata(response.data);
  setfilterdata(exercisedata);
 
} catch (error) {
	console.error(error);
}

    
  }
  getData();
  // console.log(filteredata)
},[])

useEffect(()=>{
  const getmoreData=async()=>{
         const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: count},
  headers: {
    'X-RapidAPI-Key': 'f29dd72edbmsh97113ab990ccb5fp1ffb87jsn3068bca06d4d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
  setexercisedata(response.data);
  setfilterdata(exercisedata);
 
} catch (error) {
	console.error(error);
}

    
  }
  getmoreData();
  // console.log(filteredata)
},[count])


useEffect(()=>{

  if(search!=""){
    const searchedata=exercisedata.filter((el)=>{
      return el.name.includes(search);
   })
  //  console.log(searchedata)
 
   setfilterdata(searchedata);
  }else{
    setfilterdata(exercisedata);
  }
  


},[search,exercisedata])
const incrementCounter=()=>{
  setcount(count+9);
}

  return (
    <div className="App">
    <Nav/>
    <Gallery/>
    <h1 className='text-center font-bold text-3xl font-mono'>Exercise List</h1>
    <input type="text" value={search} className='border-2 border-black rounded-xl block m-auto w-2/4 h-12 p-3' placeholder='search ur exercise' onChange={(e)=>setsearch(e.target.value)}/>
   <div className='flex flex-wrap justify-evenly'>
    {filteredata.map((ex)=>{
      return <Card exercise={ex}/>
    })}
   
    
   </div>
   <button className='bg-black text-white p-4 font-bold rounded-xl m-auto block mt-4 mb-3' onClick={incrementCounter}>Loadmore</button>
<h1 className='text-center'>________________________________________________________________</h1>
<i className='block font-bold text-center'>Made By KP ❤</i>
    </div>
  );
}

export default App;
