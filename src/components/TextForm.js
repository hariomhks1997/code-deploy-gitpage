import React, { useState } from "react";

export default function TextForm(props) {
    const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","Sucess")
  };
  const handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","Sucess")
  };
  const handleclearclick=()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Clear The Words","Sucess")
  }
  const handlecopy=()=>{
    var text=document.getElementById("myBox");
    //text.select();
    navigator.clipboard.writeText(text.value);
    //document.getSelection().removeAllRanges
    props.showAlert("Copied Clipboard","Sucess")
  }
  const handleExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/)
  
    setText(newtext.join(" "))
    props.showAlert("Remove Extra Spaces","Sucess")
  }
  const handleOnchange = (event) => [setText(event.target.value)];
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode === "dark" ? "#042743" : "white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnchange}
            rows="8"
            style={{backgroundColor: props.mode === "dark" ? "#13466e" : "white",color: props.mode === "dark" ? "white" : "#042743"}}
          ></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleupclick}>
          Convert To Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>
          Convert To Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearclick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2" style={{color: props.mode === "dark" ? "#042743" : "white"}}>
        <h2>Your Text Summary</h2>
        <p>
          word {text.split(" ").filter((element)=>{return element.length!==0}).length} character{text.length}
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p> 
      </div>
    </>
  );
}
