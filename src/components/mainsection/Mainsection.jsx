import React from "react";
import Data from "./Data";
import Card from "./mainsection_components/Card"
import "./Mainsection.css"

export default function Mainsection() {
    const cards = Data.map(item => {
        return (
            <div className = "full_card">
                <Card 
                key = {item.id}
                img = {item.img}
                nation = {item.nation}
                place = {item.place}
                date = {item.date}
                description = {item.description}
                />
                <hr></hr>
            </div>
        )
    })
    return (
        <section className = "main_section">
            {cards}
        </section>
    );
}