import { useState } from "react";


function App() {
  let [value,setValue]=useState(0)
  return (
    <div style={{marginLeft:"45%"}}>
      <p data-testid='counter-value'  style={{fontSize:"60px",fontWeight:"bolder",marginLeft:"100px"}}>{Number(value)}</p>
      <button  onClick={()=>{setValue(value+1)}} style={{marginLeft:"7%"}}>ADD</button>
      <button onClick={()=>{setValue(value-1)}}>REMOVE</button>
    </div>
  );
}

export default App;
