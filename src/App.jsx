import { useState } from 'react'
function App() {

  const [color,setColor]=useState("black");

  return (
    <div style={{backgroundColor:color}}>
      <div className="text-center font-bold font-serif text-3xl pt-12 text-white"
      >
          This is {color}!
      </div>
    <div className="bg-black w-screen h-screen flex justify-center pb-[100px] items-end" style={{backgroundColor:color}}>
      <div className="flex space-x-4 bg-slate-600 px-6 py-4 rounded-full  ">
        <button 
        className="flex rounded-full px-8 py-3 justify-center items-center text-white text-2xl font-bold bg-slate-500 " style={{backgroundColor:"blue"}}
        onClick={()=>setColor("blue")}>Blue
        </button>
        <button 
        className="flex rounded-full px-8 py-3 justify-center items-center text-white text-2xl font-bold bg-slate-500 "
        style={{backgroundColor:"red"}}
        onClick={()=>setColor("red")}>Red
        </button>
        <button 
        className="flex rounded-full px-8 py-3 justify-center items-center text-white text-2xl font-bold bg-slate-500 "
        style={{backgroundColor:"Green"}}
        onClick={()=>setColor("Green")}>Green
        </button>
        <button 
        className="flex rounded-full px-8 py-3 justify-center items-center text-white text-2xl font-bold bg-slate-500 "
        style={{backgroundColor:"Yellow"}}
        onClick={()=>setColor("Yellow")}>Yellow
        </button>
        <button 
        className="flex rounded-full px-8 py-3 justify-center items-center text-white text-2xl font-bold bg-slate-500 "
        style={{backgroundColor:"purple"}}
        onClick={()=>setColor("purple")}>Purple
        </button>
      </div>
    </div>
    </div>
  )
}

export default App
