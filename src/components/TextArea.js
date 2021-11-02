import React,{useState} from 'react'
import '../text.css'
function TextArea(props){
    const Upper=()=>{
        //console.log('Button clicked')
        setText(text.toUpperCase())
    }
    const lower=()=>{
        //console.log('Button clicked')
        setText(text.toLowerCase())
    }
    const clear=()=>{
        //console.log('Button clicked')
        setText("")
    }
    const onchange=(e)=>{
        //console.log('onchange clicked')
        setText(e.target.value)

    }
    const copy=()=>{
        let x=document.getElementById('text')
        x.select()
        navigator.clipboard.writeText(x.value)
        window.alert('copied to clipboard')
    }
    
    const [text,setText]=useState('Enter text')
    //setText('Hello')
    return(
        <>
        <div className="container">
        <textarea name="text" id="text" cols="30" rows="10" value={text} onChange={onchange}></textarea>
        <div className="buttons">
        <button className="btn" onClick={Upper}/*give function name in braces*/ >Upper Case</button>
        <button className="btn" onClick={lower}/*give function name in braces*/ >lower Case</button>
        <button className="btn" onClick={clear}/*give function name in braces*/ >Clear Text</button>
        <button className="btn" onClick={copy}/*give function name in braces*/ >copy Text</button>
        </div>
        </div>
        <div className="container" id="info">
            <h1>Text Summary</h1>
            <p>Word count: {text.split(" ").length}</p>
            <p>Character count: {text.length}</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
        </div>
        </>
    )
}
export default TextArea