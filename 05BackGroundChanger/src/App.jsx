import { useState } from "react"


function App() {
  const [color,setColor] = useState('black')

  return (
    <>
        <div className="w-full h-screen duration-200 "
        style={{backgroundColor:color}}
        >
        
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button
            
              onClick={()=>setColor("Red")}

            className="outline-none px-4
            py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor:'red'}}
            >Red</button>

            <button
            
                onClick={()=>setColor("Green")}

            className="outline-none px-4
            py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor:'green'}}
            >Green</button>

            <button
            
                onClick={()=>setColor("White")}
            
            className="outline-none px-4
            py-1 rounded-full text-white shadow-lg text-black "
            style={{backgroundColor:'white'}}
            >White</button>

            <button
            
                onClick={()=>setColor("Orange")}
            
            className="outline-none px-4
            py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor:'orange'}}
            >Orange</button>

            <button
            
                onClick={()=>setColor("Pink")}

            className="outline-none px-4
            py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor:'Pink'}}
            >Pink</button>

            </div>

            </div>
        
        
        </div>
    </>
  )
}

export default App
