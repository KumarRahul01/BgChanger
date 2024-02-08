import React, { useState } from "react";

// const [color, setColor] = useState("black");

function App() {
  const [color, setColor] = useState("black")
  return (
    <>
      {/* BackGround */}
      <div className="w-full h-screen relative" style={{backgroundColor: color}}>
        {/* color Bar */}
        <div className="flex justify-center">
          <div className="absolute flex md:flex-row bg-slate-300 px-10 py-5 bottom-10 justify-between w-10/12 rounded-xl flex-col">
            <button className="text-white bg-red-500 btn mb-2 md:mb-0" onClick={()=>{setColor("red")}}>RED</button>
            <button className="text-white bg-blue-500 btn btn mb-2 md:mb-0" onClick={()=>{setColor("blue")}} >BLUE</button>
            <button className="text-white bg-pink-500 btn  btn mb-2 md:mb-0" onClick={()=>{setColor("pink")}}>PINK</button>
            <button className="text-white bg-yellow-500 btn btn mb-2 md:mb-0" onClick={()=>{setColor("yellow")}} >YELLOW</button>
            <button className="text-white bg-green-500 btn btn mb-2 md:mb-0" onClick={()=>{setColor("green")}} >GREEN</button>
            <button className="text-white bg-purple-500 btn btn mb-2 md:mb-0" onClick={()=>{setColor("purple")}} >PURPLE</button>
            <button className="text-white bg-orange-500 btn btn mb-2 md:mb-0" onClick={()=>{setColor("orange")}} >ORANGE</button>
            <button className="text-black bg-white btn btn mb-2 md:mb-0" onClick={()=>{setColor("black")}} >CLEAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
