import { useRef, useState } from "react";
import { BrowserRouter, Routes,Route,useNavigate } from "react-router-dom"


function App() {

 

  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<BeforeOTP/>}></Route>
      <Route path="/login" element ={<AfterOTP/>}></Route>
    </Routes>
    </BrowserRouter>
  
  )
}

function AfterOTP(params) {


    const loginRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const fourthRef = useRef();


  function login(params) {
  // Backend logic
  }


  return<>
    <center><div className="bg-red-500 w-96 m-12 rounded-lg pt-10">
<center><div className="font-serif font-bold text-3xl mt-6 mb-6">Login via OTP</div></center>
<center className="flex justify-center " >
  <input onChange={(e)=>secondRef.current.focus()}  className="text-sm w-8 pl-2 m-2 pt-2 pb-1 mb-3 rounded-md" type="text" />
  <input ref={secondRef} onChange={(e)=>thirdRef.current.focus()} className="text-sm w-8 pl-2 m-2 pt-2 pb-1 mb-3 rounded-md" type="text" />
  <input ref={thirdRef} onChange={(e)=>fourthRef.current.focus()} className="text-sm w-8 pl-2 m-2 pt-2 pb-1 mb-3 rounded-md" type="text" />
  <input ref={fourthRef} onChange={(e)=>loginRef.current.focus()} className="text-sm w-8 pl-2 m-2 pt-2 pb-1 mb-3 rounded-md" type="text" />
</center>
<center><button  ref={loginRef} onClick={login} className="mb-12 p-4 rounded-xl font-medium text-gray-200 bg-orange-900">Login</button></center>

</div></center>
  </>
}

function BeforeOTP(params) {
  const navigate = useNavigate();

  function sendOTP(params) {
  //  Backend logic
    navigate("/login");
  }  

  return (
  <center><div className="bg-red-500 w-96 m-12 rounded-lg pt-10">

    <center><div className="font-serif font-bold text-3xl mt-6 mb-6">Login via OTP</div></center>
    <center><input className="text-sm pr-8 pl-2 pt-1 pb-1 mb-3 rounded-md" type="text" placeholder="Enter your mobile number" /></center>
    <center><button onClick={sendOTP} className="mb-12 p-4 rounded-xl font-medium text-gray-200 bg-orange-900">Send OTP</button></center>

    </div></center>
  )
}

export default App
