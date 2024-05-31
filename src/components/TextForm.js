import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Your Text Here")
    const handelUpClick = () => {
        setText(text.toUpperCase())
    }
    const handelLoClick = () => {
        setText(text.toLowerCase())
    }
    const handelClClick = () => {
        setText("")
    }

    const handelOnChange = (e) => {
        setText(e.target.value)
        console.log(text.length)
    }

    const handelCopy = () => {
        navigator.clipboard.writeText(text)
    }
    return (
        <>
            <div className='container'>
                <h1>{props.title}</h1>
                <textarea className="form-control my-3" id="textform" onChange={handelOnChange} value={text} rows="10" cols="8"></textarea>
                <button className='btn btn-primary my-3' onClick={handelUpClick}>Convert To UpperCase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handelLoClick}>Convert To LowerCase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handelClClick}>Clear Text</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handelCopy}>Copy Text</button>
            </div>
            <div className="container">
                <h2>Your Text Summary Here</h2>
                <p>No of words are {text.length > 0 ? text.split(" ").length : 0} and no of char are {text.length}</p>
                <p>Avg Time to Read this Article is {Math.round(text.split(" ").length * 0.008)} mint</p>
                <h4>Here is the preview of your article:</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
