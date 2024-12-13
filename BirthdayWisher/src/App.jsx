import { useState } from "react";


function App() {
  const [Name,setName] =useState("");

  function wisher(params) {
    alert(`Happy Birthday ${Name}`);
  }
  

  return (
    <div className="w-screen h-screen bg-center bg-cover bg-custom-image">
     
      <div className="relative top-40 left-24 w-3/6 m-auto bg-blue-900 opacity-60 pt-6 rounded-xl">
        <center className="font-serif font-bold text-xl text-white ">Enter your Name</center>
        <center><input onChange={(e)=> setName(e.target.value)} className="w-96 m-6 ml-20 mr-20"type="text" placeholder="Enter your Name" /></center>
       <center> <button onClick={wisher} className="p-1 pl-3 pr-3 m-2 bg-emerald-600 rounded-md text-white">Done</button></center>
      </div>
    
    </div>
  )
}

export default App
