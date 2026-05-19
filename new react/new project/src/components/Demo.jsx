import React from "react";
import { useEffect } from "react";

function Demo(){
    useEffect(()=>{
        console.log("hello");
    },[]);
    return(
        <div>
            <h1>Demo Components</h1>
        </div>
    );

}

export default Demo;