import { useEffect, useState } from "react";
function Useeffect(){
    const [old,setnew]=useState(0);
    useEffect(()  => {
     console.log ("component rendered")
       }, []);
     return (
        <div> 
        <h2>hello</h2>
        <button onClick={ () =>setnew(old+1)}>
        click 
        </button>
        </div>
     )
    }
export default Useeffect;

