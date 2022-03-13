
import React from 'react'
import style from "./style.module.css"

export default function Footer() {
    return (
        < >
            <div className= {style.footer} id="Contactme">
                <h2>Contact me</h2>
                <div>
                    <ul>
                        <li>
                            <a href="tel:">Number</a>
                        </li>
                        <li>
                            <a href="#Linken">Linkden</a>
                        </li>
                        <li>
                            <a href="#GibhUB">Gib Hub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}



