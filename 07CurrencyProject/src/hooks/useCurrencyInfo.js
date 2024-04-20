import {useEffect,useState} from 'react'
// Preparing for hook : 
function useCurrencyInfo(currency){
    // Empty object is provided if no fetching takes place then to show the {}
    const [data,setData] = useState({})

    // Calling api here : 
    useEffect(()=>{
// API CALL
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
    .then((res)=> res.json())
    .then((res)=> setData(res[currency]))
    console.log(data)

    },[currency])

    console.log(data);
    return data
}

export default useCurrencyInfo;