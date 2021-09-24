import React, { useState } from "react";

export default function TextForms(props) {
  const HandlerUp = (event) => {
    console.log("good to see you");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const HandlerLow = (event) => {
    console.log("good to see you");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const HandlerClear = (event) => {
    console.log("good to see you");
    let newText = " ";
    setText(newText);
  };

  const Handler2 = (event) => {
    console.log("gthis is handler 2");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={Handler2}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={HandlerUp}>
          Convert in capital letter
        </button>
        <button className="btn btn-primary mx-2" onClick={HandlerLow}>
          Convert in small letter
        </button>
        <button className="btn btn-primary mx-2" onClick={HandlerClear}>
          Delete the text
        </button>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>Time takes to read this para is {0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
