import {useState} from 'react';

function App() {

  // Step 1 :
  let [count,setCount] = useState(0)
  // Step 2 : We can provide default value to the useState as we feels ..

  
  // To control the effects in ui we uses Hooks : useState hook is being used here . 

  // let counter = 5 

  const addValue = ()=>{
    // counter ++ ;
    // But we need to update this in UI .So we can use useState hook for that purpose . 
    setCount(count ++)
  }
  const removeValue = ()=>{
    setCount(count --)
  }
  const resetValue = ()=>{
    setCount(count = 0)
  }
  

  return (

    <>
        <h1> Counter Project Demo</h1>
        <h2> Counter Value : {count} </h2>
        <button 
            onClick={addValue}
        > Add Value </button>
        <br/>
        <button
            onClick={removeValue}
        > Decrease Value </button>
        <button
            onClick={resetValue}
        >
          Reset
        </button>
    </>
    
  )
}

export default App

/**
 * By this project we learned More on React Hook Mainly named as useState() which is coming from react .
 * Initially we can provide the values to the useState()
 */
