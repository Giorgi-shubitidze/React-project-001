import React from "react"
import './App.css'
import { AiFillLinkedin, AiFillMail} from 'react-icons/ai';


export default function Main() {
    return (
        <div className="main">
            <h2 className="name">Laura Smith</h2>
            <h3 className="job">Frontend Developer</h3>
            <h5 className="website">laurasmith.website</h5>
            <div className="button-list">
                <button className="button1"><AiFillMail className="mail" />Mail</button>
                <button className="button2"><AiFillLinkedin className="linkedin" />Linkedin</button>
            </div>
        </div>

    )
}