import React from "react";
import "./text_part1.css"
import image from "./location.png"

export default function Part1(props) {
    return(
        <div className="part1">

            <div className="location">
                <img src={image} className="image_location" alt="location" />
            </div>

            <div className="nation">
                <p className="nation_paragraph"> {props.nation}</p>
            </div>

            <div className="phrase">
                <p className="prhase_paragraph"> View on Google Maps</p>
            </div>

        </div>
    );
}