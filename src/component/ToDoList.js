
import React from "react";

// function TextToSpeech(props) {
//     const Speech = new SpeechSynthesisUtterance();
//     const message = props.item.value;
//     Speech.lang = "eng";
//     Speech.text = message;
//     window.speechSynthesis.speak(Speech);
// }

export default function ToDoList(props) {
    return (
        <>
            <div className="list_item">
                <div className="list_text">
                    {props.item}
                </div>
                <span className="delete_icon">
                    <i className="fa-solid fa-trash" onClick={(e) => props.removeList(props.index)}></i>
                </span>
            </div>
        </>
    );
}