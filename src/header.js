import React from "react"
import './App.css'
import headerImage from "./images/image1.png"

export default function Header() {
    return (
        <img className="header-img" src={headerImage} />

    )
}