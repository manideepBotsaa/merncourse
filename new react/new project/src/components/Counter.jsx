import React from "react";
import { useState,useEffect } from "react";
import "./Counter.css"
function Counter()
{
    const [count,setCount] = useState(10);
    useEffect(()=>{
        console.log("counter value updated")
    },[count])
    function increment(){
        // count=count+1;
        setCount(count+1);
    }
    function decrement(){
        // count=count+1;
        setCount(count-1);
    }
    return(
      <div className="counter">
        <button onClick={increment}>+</button>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>  
      </div>

    );
}

export default Counter;