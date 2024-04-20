
import {InputBox} from './components'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { useState } from 'react'

function App() {

  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
 

  return (
    <>
     <h1 className="text-3xl bg-orange-500 ">Currency App</h1>
     <InputBox/>
    </>
  )
}

export default App
