import React, { useState } from 'react';

export default function TextForm(props) {
   const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {    
    var text = document.getElementById("myBox");
    text.select();    
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }

  const handleExtraSpace = () => {
    let newText = text.replace(/ +/g, " ");

    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success");
  }

  return (
    <>   
      <div className='container' style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'black'}} id="myBox"rows="8">
        </textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase 
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowercase
       </button>
       <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text 
       </button>
       <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text
       </button>
       <button className="btn btn-primary mx-1" onClick={handleExtraSpace}> Remove Extra Spaces
       </button>
    </div> 
    <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h2>Your Text summary</h2>
      <p> {text.split(" ").length} word and {text.length} characters </p>
      <p> {0.008 * text.split(" ").length} Minute read </p>
      <h2> preview </h2>
      <p>{text.length>0?text:"Enter something in the textbox above to priview it here"}</p>
    </div>
    </>

  );
}
