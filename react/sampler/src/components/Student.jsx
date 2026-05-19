import React from "react";
import './Student.css'


function Student(){
    return(
        <div className="student">
          <h2>Name manideep</h2>
          <h3>Rno: 10293736</h3>
          <h3>Branch: computer science</h3>
          <Details/>
        </div>
        
    );
}


function Details(){
    return(
        <div>
          <p>school:SMHS</p>
        </div>
    );
}

export default Student;