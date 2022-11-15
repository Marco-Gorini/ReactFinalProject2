import React from "react";
import Part1 from "./textcomponents/part1/text_part1";
import "./Text.css"
import Part2 from "./textcomponents/part2/text_part2";
import Part3 from "./textcomponents/part3/text_part3";
import Part4 from "./textcomponents/part4/text_part4";

export default function Text(props) {
    return (

        <div className="text">
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