import { useEffect, useState } from 'react';
import './App.css';
import GridComp from './components/GridComp';
import LoginComp from './components/LoginComp';

function App() {
  var [arr,setArr]=useState([])
  // function fetches data from jsonplaceholder
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    .then(res=>res.json())
    .then(res=>setArr(res))
  },[])

  return (
    <>
    <div className="container">
      <LoginComp/>      
    </div>
    <GridComp arr={arr}/>
    </>
  );
}

export default App;
