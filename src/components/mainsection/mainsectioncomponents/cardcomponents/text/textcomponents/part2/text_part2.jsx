import React from "react";
import "./text_part2.css"

export default function Part2(props) {
    return (
        <div className="title">
            <p className="title_paragraph">{props.place}</p>
        </div>
    );
}