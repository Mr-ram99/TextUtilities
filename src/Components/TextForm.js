import React, { useState } from 'react'
import propTypes from 'prop-types'



function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let Uptext = text.toUpperCase();
        setText(Uptext);
        props.showAlert("Text changed to uppercase!!", "success");
    }

    const handleLowClick = () => {
        let lowtext = text.toLowerCase();
        setText(lowtext);
        props.showAlert("Text changed to lowercase!!", "success");
    }
    const handleClearClick = () => {
        let clearText = "";
        setText(clearText);
        props.showAlert("Text cleared!!", "success");
    }
    const handleCopy = () => {
        let copyText = document.getElementById("mybox");
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to clipboard!!", "success");
    }
    const handleReverseClick = () => {
        let newText = text.split("");
        setText(newText.reverse().join(""));
        props.showAlert("Text reversed!!", "success");
    }
    const extractEmails = () => {
        let textArr = text.split(' ');
        let emails = [];
        for (var i = 0; i < textArr.length; i++) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(textArr[i])) {
                emails.push(textArr[i]);
            }
        }
        if (emails.length === 0) {
            props.showAlert("No emails found!!", "warning");
        }
        else {
            setText(emails.join('\n'));
            props.showAlert("Emails extracted!!", "success")
        }
    }

    const extractMobiles = () => {
        let textArr = text.split(' ');
        let mobiles = [];
        for (var i = 0; i < textArr.length; i++) {
            if (/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(textArr[i])) {
                mobiles.push(textArr[i]);
            }
        }
        if (mobiles.length === 0) {
            props.showAlert("No Mobile number found!!", "warning");
        }
        else {
            setText(mobiles.join('\n'));
            props.showAlert("Mobile extracted!!", "success");
        }
    }


     const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const patternFinder = () => {
        const pattern = prompt("Enter Pattern:(Note: If found, displayed in uppercase)");
        let result = text.split(pattern);
        let foundText = pattern.toUpperCase();
        if (result.length > 1) {
            setText(result.join(foundText));
        }
        else {
            props.showAlert("No match found!!", "warning");
        }
    }

    const textToBinary = () => {
        let newText = text.split('');
        let binaryCode = "";
        for (let i = 0; i < newText.length; i++) {
            if (i < newText.length - 1)
                binaryCode += newText[i].charCodeAt(0).toString(2) + " ";
            else
                binaryCode += newText[i].charCodeAt(0).toString(2);
        }
        setText(binaryCode);
        props.showAlert("Text changed to binary code!!", "success");

    }

    const binaryToText = () => {
        let binary = text.split(" ");
        var newText = "";
        for (let i = 0; i < binary.length; i++) {
            var decimal = parseInt(binary[i], 2);
            newText += String.fromCharCode(decimal);
        }

        setText(newText);
        props.showAlert("Binary Code changed to text!!", "success");

    }

    return (
        
            <div className="container my-2" style={{ color: props.mode === "light" ? "black" : "white" }}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="10" value={text}
                        style={{
                            resize: "none",
                            backgroundColor: props.mode === "dark" ? "grey" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                            borderColor: props.mode === "dark" ? "white" : "black"
                        }} onChange={handleOnChange} placeholder="Enter Text Here">
                    </textarea>
                </div>

                <div className="container">
                    <h2>Text Summary</h2>
                    <p>{text.length === 0 ? 0 : text.trim().split(/\s+/).length} Words, {text.length} Characters</p>
                    <p>Less than {Math.ceil(0.008 * text.split(' ').length)} Minutes read</p>
                </div>

                <button type="button" className="btn btn-success m-2" onClick={handleUpClick} disabled={text.length===0}>Convert to Uppercase</button>
                <button type="button" className="btn btn-success m-2" onClick={handleClearClick} disabled={text.length===0}>Clear Text</button>
                <button type="button" className="btn btn-success m-2" onClick={handleLowClick} disabled={text.length===0}>Convert to Lowercase</button>
                <button type="button" className="btn btn-success m-2" onClick={handleCopy} disabled={text.length===0}>Copy Text</button>
                <button type="button" className="btn btn-success m-2" onClick={handleReverseClick} disabled={text.length===0}>Reverse the Text</button>
                <button type="button" className="btn btn-success m-2" onClick={patternFinder} disabled={text.length===0}>Find Pattern</button>
                <button type="button" className="btn btn-success m-2" onClick={extractEmails} disabled={text.length===0}>Extract Email addresses</button>
                <button type="button" className="btn btn-success m-2" onClick={extractMobiles} disabled={text.length===0}>Extract Mobile Numbers</button>
                <button type="button" className="btn btn-success m-2" onClick={textToBinary} disabled={text.length===0}>Text to Binary</button>
                <button type="button" className="btn btn-success m-2" onClick={binaryToText} disabled={text.length===0}>Binary to Text</button>
            </div>
            
    )
}

export default TextForm
TextForm.propTypes = {
    heading: propTypes.string.isRequired
}