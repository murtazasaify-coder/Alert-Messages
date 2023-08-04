import React, { useState } from 'react'

export default function Form(props) {
    const  handleonclick=()=>{
        // console.log("before" +text);
        let textlocal=text.toUpperCase();
        settext(textlocal);
        props.showAlert('Converted to Upper Case','success');
        
    }
    const  handleonclickLower=()=>{
        let textlocal=text.toLowerCase();
        settext(textlocal);
        props.showAlert('Converted to Lower Case','success');
   
    }
    const  handleonclickclear=()=>{
        let textlocal='';
        settext(textlocal);
        props.showAlert('Cleared Everything','success');
   
    }
       
    const  handlechange=(event)=>{
        settext(event.target.value);
        
    }
    const [text, settext] = useState("Welcome to hakimi Provision");
  return (
    
    <div>
       <div className="container">
         <div >
           <h1>{props.heading}</h1>
         </div>
         <div className="mb-3">
           <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode==='light'?'white':'#067a97', color:props.mode==='light'?'black':'white'}} onChange={handlechange} value={text} rows="6"></textarea>
         </div>
            <button className="btn btn-primary"  onClick={handleonclick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-4"  onClick={handleonclickLower}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-4"  onClick={handleonclickclear}>Clear Text</button>
        </div> 
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008*text.split(" ").length} time to read </p>
        </div>
        <div className="container my-3">
            <h2>Preview</h2>
            <p>{text.length===0?'nothing to preview':text}</p>
        </div>
    </div>
  )
  }
