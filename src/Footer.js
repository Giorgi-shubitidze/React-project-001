import React from "react"
import './App.css'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';


export default function Footer() {
    return (
        <div className="Footer">
            <div className="icon"><AiFillTwitterSquare/></div>
            <div className="icon"><AiFillFacebook/></div>
            <div className="icon"><AiFillInstagram/></div>
            <div className="icon"><AiFillGithub/></div>
        </div>
    )
}