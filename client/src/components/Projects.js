import React from 'react'
    import style from "./style.module.css"
    import {fluffy,flight} from "./images"
    
    export default function Projects() {
      return (
        <>
        <div className={style.projects} id= "projects">
        <section className="card">
          <header>FluffyButts </header>
          <img src= {fluffy} alt="Fluffy buts" />
          <a href="https://iamcvilla.github.io/fluffybutts/" target = "_blank" >fluffy butts </a>
          <p> </p>
        </section>
        <section className="card">
          <header> Flight Tracker </header>
          <img src= {flight} alt = "Flight Tracker" />
          <a href="https://mighty-garden-09302.herokuapp.com/homepage" target = "_blank" >Flight Tracker </a>
          <p> </p>
        </section>
        <section className="card">
          <header> Project3 </header>
          <img
            src=""
            alt="project3"
          />
          <p></p>
        </section>
        <section className="card">
          <header> Project4 </header>
          <img
            src=""
            alt=" Project4 "
          />
          <p> </p>
        </section>
      </div>    
      
  </>
      )
    }