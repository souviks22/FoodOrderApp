import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Cart from '../Cart/Cart'
import Conformation from '../Conformation/Conformation'
import styles from './Overlay.module.css'

const CartModal = (props) => {
    const orderHandler = () => {
        props.onClose()
        props.onOrder()
    }
    return (<Card className={styles.modal}>
        <div className={styles.top}>
            <h2>Your Cart</h2>
            <i className="fa-solid fa-xmark" onClick={props.onClose}></i>
        </div>
        <Cart onOrder={orderHandler} />
    </Card>)
}

const ConformModal = (props) => {
    return (<Card className={`${styles.modal} text-center`}>
        <Conformation />
        <button className="btn btn-lg btn-dark px-4" onClick={props.onClose}>OK</button>
    </Card>)
}

const Backdrop = (props) => {
    return (<div className={styles.backdrop} onClick={props.onClick}></div>)
}


const Overlay = (props) => {
    const overlayDiv = document.getElementById('overlay')
    return (<>
        {props.cartModal && ReactDOM.createPortal(
            <CartModal
                onOrder={props.onOrder}
                onClose={props.onClose}
            />, overlayDiv
        )}
        {props.conformModal && ReactDOM.createPortal(
            <ConformModal
                onClose={props.onClose}
            />, overlayDiv
        )}
        {ReactDOM.createPortal(
            <Backdrop
                onClick={props.onCartClose}
            />, overlayDiv
        )}
    </>)
}

export default Overlay