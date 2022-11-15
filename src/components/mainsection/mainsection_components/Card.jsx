import React from "react";
import "./Card.css"
import Image from "./card_components/image/Image";
import Text from "./card_components/text/Text";

export default function Card(props) {
    return (
        <div className = "card">
            <Image 
                img = {props.img}
            />
            <Text
                nation = {props.nation}
                place = {props.place}
                date = {props.date}
                description = {props.description}
            />
        </div>
    );
}