import React from "react";
import "./text_part3.css"

export default function Part3(props) {
    return (

        <div className="date">
            <p className="date_paragraph">{props.date}</p>
        </div>
    );
}