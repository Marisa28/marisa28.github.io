import React from 'react'
import style from "./style.module.css"
export default function Navbar() {
    return (
        < >
            <nav className={style.nav}>

                <a href="#aboutme">About Me</a>
                <a href="#projects">Work</a>
                <a href="#Contactme"> Contact Me </a>
                <a href="#Resume">Resume</a>

            </nav>
        </ >
    )
}
