import React  from 'react'
import s from "./Section.module.css"
import logo from "../img/14.jpg"


function Section () {
    return(
        <div className={s.about}>
            <img  className={s.img} src={logo} alt="logo"/>
        </div>
    )
}

export default Section;