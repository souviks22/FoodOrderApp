import React from "react"
import CartButton from "./CartButton"
import styles from './Header.module.css'

const Header = (props) => {
    return (<>
        <header className={styles.topbar}>
            <h1><i className="fa-brands fa-react"></i>Barbique Fashion</h1>
            <CartButton onClick={props.onCartShow} />
        </header>
        <figure className={`img-fluid ${styles['top-img']}`}>
            <img src="/foods.jpg" alt="food" />
        </figure>
    </>)
}

export default Header