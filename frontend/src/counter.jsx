import { useState } from "react";
function Counter() {
const [old,setnew]=useState(0);
return(
    <div>
    <h2>{old}</h2>
    <button onClick={()=>setnew(old+1)}>
      click me
    </button>
        </div>
)
}
export default Counter;