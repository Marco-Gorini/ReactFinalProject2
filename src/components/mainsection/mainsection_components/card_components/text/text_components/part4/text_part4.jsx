import React from "react";
import "./text_part4.css"

export default function Part4(props){
    return (

        <div className = "description">
            <p className = "description_paragraph"> {props.description}</p>
        </div>

    );
}