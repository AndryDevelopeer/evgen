import React from "react"
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <div className={s.nav}>
                <div className={s.navItem}>Work</div>
                <div className={s.navItem}>About</div>
                <div className={s.navItem}>Contact</div>
                <div className={s.navItem}>Other</div>
            </div>
        </div>
    );
}

export default Header;