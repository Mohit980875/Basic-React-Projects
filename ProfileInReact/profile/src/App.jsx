import img from './assets/profileImage.jpeg';
// import "./index.css";

function App() {
  

  return (
    <>
     <Profile/>
    </>
  )
}

function Profile(params) {
  return <>
  <div className=" m-auto w-72 rounded-md bg-violet-500 text-slate-900 border-4 border-gray-500 ">

    <div className='bg-cyan-400 pt-6 '>
    <center><img className='rounded-full relative top-9 grayscale-1' src={img} alt="" height={'100px'} width={'100px'} /></center>
    </div>

    <div className='bg-white pt-10'>
      <div className='flex '>
        <div className='w-42 ml-16 font-semibold font-serif'>Mohit Pratap Singh</div>
        <div className=' ml-3 text-gray-600'>21</div>
      </div>
      <center className='text-gray-500 font-medium'>INDIA</center>
     
        <div className='flex justify-between border-2 p-4 mt-7'>
          <div>
            <center><b>80k </b></center>
            <div>Followers</div>
          </div>
          <div>
            <center><b>803k </b></center>
            <div>likes</div>
          </div>
          <div>
            <center><b>1.4k </b></center>
            <div>Photos</div>
        </div>
      </div>

    </div>
  </div>
  </>
}

export default App
