import React, { useState } from 'react'

export default function TextForm(props) {
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lower case has been enabled","Success")
    }
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Upper case has been enabled","Success")
    }
    const handleClClick = () => {
        let newText = '';
        setText(newText);
        // props.showAlert(("Clear button has been clicked","Success"))

    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState('')

    return (
        <>
            <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div class="mb-3">
                    <textarea className="form-control" value={text} id="myBox" rows="6" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'  }}></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary ms-3" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary ms-3" onClick={handleClClick}>Clear</button>
                <button className="btn btn-primary ms-3" onClick={handleCopyClick}>Copy text</button>
            </div>
            <div className='container my-3'style={{color:props.mode === 'dark' ? 'white' : '#042743'  }}>
                <h2>Your text summary</h2>
                <p>{(text.split(" ").length) - 1} words and {text.length} characters</p>
                <p>{0.008 * ((text.split(" ").length) - 1)} minutes to read</p>
                <h1>Preview</h1>
                <p>{text.length>0?text:"Enter your text in the textbox to preview it here"}</p>
            </div>
        </>
    )
}

// onchange event was used because the text area gets entered every time with a new data and to take them as an input we need to use onchange event