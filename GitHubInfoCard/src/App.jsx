import { useState,useEffect } from "react"
import img from "/profileImage.jpeg"

function App() {
  const [userData,setUserData] =useState({})

  useEffect(() => {
    fetch("https://api.github.com/users/Mohit980875").then( async (res)=>{
        const val = await res.json();
          console.log(val);
          
          setUserData(val);
        })

    
  
    
  }, [])
  
 

 
    return <>
  <div className=" m-auto w-72 rounded-md bg-violet-500 text-slate-900 border-4 border-gray-500 ">

    <div className='bg-cyan-400 pt-6 '>
    <center><img className='rounded-full relative top-9 grayscale-1' src={img} alt="" height={'100px'} width={'100px'} /></center>
    </div>

    <div className='bg-white pt-10'>
      <div className='flex '>
       <center> <div className='w-42 ml-20 font-semibold font-serif'>{userData.login}</div></center>
        {/* <div className=' ml-3 text-gray-600'></div> */}
      </div>
      <center className='text-gray-500 font-medium'>Type : {userData.type}</center>
     
        <div className='flex justify-between border-2 p-4 mt-7'>
          <div>
            <center><b>{userData.followers}</b></center>
            <div>Followers</div>
          </div>
          <div>
            <center><b>{userData.public_repos} </b></center>
            <div>Repos</div>
          </div>
          <div>
            <center><b>{userData.following} </b></center>
            <div>Following</div>
        </div>
      </div>

    </div>
  </div>
  </>
  
}



export default App
