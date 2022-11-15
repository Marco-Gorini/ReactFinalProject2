import React from "react";
import Part1 from "./text_components/part1/text_part1";
import "./Text.css"
import Part2 from "./text_components/part2/text_part2";
import Part3 from "./text_components/part3/text_part3";
import Part4 from "./text_components/part4/text_part4";

export default function Text(props) {
    return (

        <div className = "text">
            <Part1
                nation = {props.nation}
            />
            <Part2
                place = {props.place}
            />
            <Part3
                date = {props.date}
            />
            <Part4
                description = {props.description}
            />
        </div>

    );
}