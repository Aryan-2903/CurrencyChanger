import { useEffect,useState } from "react";


//custom hook
function useCurrencyInfo(currency){
  const [data,setData]= useState({});
  useEffect((currency)=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
    console.log(data);
  },[currency])
  return data;
}

export default useCurrencyInfo;

//use effect takes two parameter one is function and other is  an array which contains the parameters on which the function depends like in this case it is currency like inr,usd etc
