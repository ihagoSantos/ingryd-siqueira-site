"use client"

import "./Navbar.css"
import { useState } from "react"

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const links = [
        ["Início", "#"],
        ["Sobre mim", "#"],
        ["Serviços", "#"],
        ["Depoimentos", "#"],
        ["Contato", "#"],
    ]
    
    return (
        <nav className="navbar">
            {/* Botão Hambúrguer */}
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
            </button>

            <ul className="menu">
                { links.map(link => (<li key={link[0]}><a href={link[1]}>{link[0]}</a></li>)) }
            </ul>
            
            <ul className={`menu-mobile ${isOpen ? "open" : ""}`}>
                { links.map(link => (<li key={link[0]}><a href={link[1]}>{link[0]}</a></li>)) }
            </ul>
            
        </nav>
    )
}