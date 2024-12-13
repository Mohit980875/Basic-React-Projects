import { useState } from "react";



function App() {

  const [paraLength,setparaLenght] = useState(0);
  const [paragraph,setParagraph] = useState("")

  function paragraphGenerator(params) {
    console.log("called");
    
    const words =["Jai","Shree","Ram","jagannath","Radha", "Rani","Shyam","Shiv"];
    let para = "";
    for (let i = 0; i < paraLength; i++) {
      para += words[Math.floor( Math.random()*8)] ;
      para += " ";
      
    }
   setParagraph(para);
    
  }

  
  

  return (
    <>
      <div className="text-xl font-bold mt-7 mb-4 font-serif">
       <center> Para Generator</center>
      </div>
      <div>
        <center>
        <input onChange={(e)=>setparaLenght(e.target.value) } className ="border-2 text-sm pr-80 pt-2 pb-2 pl-1  border-gray-300" type="text" placeholder="Enter Number of Words" />
        <button onClick={paragraphGenerator} className="pl-3 pr-3 pt-3 pb-3 bg-black m-2 ml-4 text-gray-200 text-xs rounded-md">Generate</button>
        </center>
      </div>

      <center>{paragraph}</center>
    </>
  )
}

export default App
