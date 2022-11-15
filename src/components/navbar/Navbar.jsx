import React from "react";
import "./Navbar.css"
import image from "./navbar_images/world.png"

export default function Nevbar() {
    return (
        <nav>
            <div className = "navbar">
                
                <div className = "div_image">
                    <img src = {image} alt = "world" className = "world_image"/>
                </div>
                
                <div className = "div_paragraph">
                    <p className = "navbar_paragraph">my travel journal.</p>
                </div>
                
            </div>
        </nav>
    );
}