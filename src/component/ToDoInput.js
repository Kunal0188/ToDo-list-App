
import React, { useState } from "react";

export default function ToDoInput(props) {
    const [inputText, setInputText] = useState("");
    const enterPress = (e) => {
        if (e.keyCode === 13) {
            props.addList(inputText)
            setInputText("");
        }
    }
    return (
        <>
            <div className="input_container">
                <input type="text" className="input_box" placeholder="Enter to Create" value={inputText} onKeyDown={enterPress} onChange={(e) => setInputText(e.target.value)} />
                <button className="create_btn" onClick={() => {
                    setInputText("")
                    props.addList(inputText)
                }}>+</button>
            </div>
        </>
    );
}