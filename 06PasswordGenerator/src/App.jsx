import { useState,useCallback,useEffect,useRef } from "react"

function App() {
  // We need usestate to choose the length accordingly : 
  const [length,setLength] = useState(8);
 // We need usestate to choose the check box of number accordingly :
  const [numberAllowed,setNumberAllowed]  = useState(false);
 // We need usestate to choose the check box of character accordingly :
  const [charAllowed,setCharAllowed] = useState(false);
// Here we uses this to select the password generator arrised in the input box : 
  const [password,setPassword] = useState("");
// We need to call the passwordGenerator function in all check boxes so we used useCallback function . 

// useReff for copying the content : 
const passwordRef = useRef(null)


// Remeber we are passing everything in this array because we need them to generate the password as clicked that is the reason . 
  const passwordGenerator = useCallback(()=>{

      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) str += "0123456789"

      if(charAllowed) str+= "!@#$%^&*()_+=-[];,./"

      for(let i = 1; i<=length ; i++) {
        let char = Math.floor(Math.random()*str.length + 1);

        pass += str.charAt(char) ; 

      }

      setPassword(pass)




  },[length,numberAllowed,charAllowed]);

 const copyPasswordToClipboard = useCallback(()=>{

  passwordRef.current?.select() ;

  passwordRef.current?.setSelectionRange(0,length)

  window.navigator.clipboard.writeText(password)

 },[password])

  useEffect(()=>{

    passwordGenerator()

  },[length,numberAllowed,charAllowed,passwordGenerator])


  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 
       py-3 my-8 text-orange-500 bg-gray-700">

      <h1 className="text-4xl text-center text-white my-3">Password Generator</h1>
      
              <div className = "flex shadow rounded-lg overflow-hidden mb-4">
                  <input
                   type="text"
                   value={password}
                   className="outline-none w-full py-1 px-3"
                   placeholder='Password'
                   readOnly
                   ref={passwordRef}
                   />

                   <button

                        onClick={copyPasswordToClipboard}

                      className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
                   >Copy
                   </button>


              
              </div>

              <div
              
                className="flex text-sm gap-x-2"

              >
              
                <div className="flex items-center gap-x-1">
                
                  <input
                    type="range"
                    min={6}
                    max={100}
                    value={length}
                    className="cursor-pointer"
                    onChange={(e)=>{setLength(e.target.value)}}
                  />

                    <label>Length : {length} </label>

                </div>

                <div className="flex items-center gap-x-1">
                
                      <input
                          type="checkbox"
                          defaultChecked={numberAllowed}
                          id="numberInput"
                          onChange={()=>{
                            setNumberAllowed((prev)=> !prev)
                          }}

                      />

                      <label htmlFor="numberInput">Number</label>

                </div>

                <input
                          type="checkbox"
                          defaultChecked={charAllowed}
                          id="characterInput"
                          onChange={()=>{
                            setCharAllowed((prev)=> !prev)
                          }}

                      />

                      <label htmlFor="characterInput">Characters</label>



              </div>

      </div>
    </>
  )
}

export default App
