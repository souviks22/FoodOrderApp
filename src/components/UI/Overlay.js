import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Cart from '../Cart/Cart'
import styles from './Overlay.module.css'

const Modal = (props) => {
    return (<Card className={styles.modal}>
        <div className={styles.top}>
            <h2>Your Cart</h2>
            <i className="fa-solid fa-xmark" onClick={props.onClose}></i>
        </div>
        <Cart />
    </Card>)
}

const Backdrop = (props) => {
    return (<div className={styles.backdrop} onClick={props.onClick}></div>)
}



const Overlay = (props) => {
    const overlayDiv = document.getElementById('overlay')
    return (<>
        {ReactDOM.createPortal(<Modal onClose={props.onCartClose} />, overlayDiv)}
        {ReactDOM.createPortal(<Backdrop onClick={props.onCartClose} />, overlayDiv)}
    </>)
}

export default Overlay