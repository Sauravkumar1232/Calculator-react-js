import React,{useState} from "react";
import './index.css';
const App=()=>{

  const [result,setResult]=useState("");   // useState hock
   const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
   }

   const clearDisplay=()=>{
    setResult("");
   }

   const calculat=()=>{
     setResult(eval(result).toString())  //simply gives solution of maths
   }
  return(
<div className="big">

<span className="darkmode">
        <button >Enable Dark Mode</button>
</span>

  <div className="calc">
    {/* <h1>hello</h1> */}
    <input type="text" placeholder="0" id="answer" value={result} />
    <input type="button" value="AC" className="button button1" onClick={clearDisplay}/>
    <input type="button" value="%" className="button" onClick={clickHandler}/>
    <input type="button" value="/" className="buttoncol4" onClick={clickHandler}/>
   
   
    <input type="button" value="7" className="button" onClick={clickHandler}/>
    <input type="button" value="8" className="button" onClick={clickHandler}/>
    <input type="button" value="9" className="button" onClick={clickHandler}/>
    <input type="button" value="*" className="buttoncol4" onClick={clickHandler}/>
    
    
    
    <input type="button" value="4" className="button" onClick={clickHandler}/>
    <input type="button" value="5" className="button" onClick={clickHandler}/>
    <input type="button" value="6" className="button" onClick={clickHandler}/>
     <input type="button" value="-" className="buttoncol4" onClick={clickHandler}/>
   
   
    <input type="button" value="1" className="button" onClick={clickHandler}/>
    <input type="button" value="2" className="button" onClick={clickHandler}/>
    <input type="button" value="3" className="button" onClick={clickHandler}/>
   <input type="button" value="+" className="buttoncol4" onClick={clickHandler}/>

    <input type="button" value="0" className="button" onClick={clickHandler}/>
    <input type="button" value="." className="button" onClick={clickHandler}/>
    <input type="button" value="=" className="button button1"  onClick={calculat}/>


    
  </div>

  

  </div>

  
  )
}
export default App;