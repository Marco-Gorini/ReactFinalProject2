import React from "react";
import "./Image.css"

export default function Image(props) {
    return (
        <div className="image">
            <img src={props.img}  className="landscape" alt="landscape" />
        </div>

    );
}