import { useRef } from "react"



function App() {
  const divref = useRef();
  

  return (
    <>
      <div  ref={divref} className="flex flex-col justify-end h-screen">
      <div className="bg-slate-200  ">
        <center>
        <button onClick={()=> divref.current.style.backgroundColor ="red"} className="rounded-md bg-red-700 pr-5 pl-5 p-1 m-2">Red</button>
        <button onClick={()=> divref.current.style.backgroundColor ="yellow"} className="rounded-md  bg-yellow-600 pr-5 pl-5 p-1 m-2">Yellow</button>
        <button onClick={()=> divref.current.style.backgroundColor ="black"} className="rounded-md  bg-gray-700 text-slate-200 pr-5 pl-5 p-1 m-2">Black</button>
        <button onClick={()=> divref.current.style.backgroundColor ="violet"} className="rounded-md  bg-violet-700 pr-5 pl-5 p-1 m-2">Purple</button>
        <button onClick={()=> divref.current.style.backgroundColor ="green"} className="rounded-md  bg-green-600 pr-5 pl-5 p-1 m-2 ">Green</button>
        <button onClick={()=> divref.current.style.backgroundColor ="blue"} className="rounded-md  bg-blue-700 pr-5 pl-5 p-1 m-2">Blue</button>
        <button onClick={()=> divref.current.style.backgroundColor ="white"} className="rounded-md  bg-orange-500 pr-5 pl-5 p-1 m-2">Default</button>
        </center>
      </div>
      </div>
     
    </>
  )
}

export default App
