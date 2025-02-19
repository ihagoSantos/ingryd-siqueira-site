"use client"

import "./Navbar.css"
import { useState } from "react"

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="navbar">
            {/* Botão Hambúrguer */}
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
            </button>

            <ul className="menu">
                <li><a href="#">INÍCIO</a></li>
                <li><a href="">SOBRE MIM</a></li>
                <li><a href="">SERVIÇOS</a></li>
                <li><a href="">DEPOIMENTOS</a></li>
                <li><a href="">CONTATO</a></li>
            </ul>
            
            <ul className={`menu-mobile ${isOpen ? "open" : ""}`}>
                <li><a href="#">INÍCIO</a></li>
                <li><a href="">SOBRE MIM</a></li>
                <li><a href="">SERVIÇOS</a></li>
                <li><a href="">DEPOIMENTOS</a></li>
                <li><a href="">CONTATO</a></li>
            </ul>
            
            
        </nav>
    )
}