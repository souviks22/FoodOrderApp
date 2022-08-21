import React, { useState, useContext } from 'react'
import CartItem from './CartItem'
import Checkout from './Checkout'
import Card from '../UI/Card'
import styles from './Cart.module.css'
import CartContext from '../../cart-context'

const Cart = (props) => {
    const [isCheckout, setIsChekout] = useState(false)
    const cartCtx = useContext(CartContext)
    const checkoutHandler = () => {
        window.scrollTo(0, 150)
        setIsChekout(true)
    }
    const cancelCheckoutHandler = () => {
        setIsChekout(false)
        window.scrollTo(0, 0)
    }
    const emptyText = <p>Cart is Empty</p>
    const totalFoodCost = cartCtx.cart.reduce((accumulator, currentValue) => accumulator + currentValue.cost * currentValue.count, 0)
    const cartItems = <>
        <section className={styles['cart-items']}>
            {cartCtx.cart.map(cartItem =>
                <CartItem
                    key={cartItem.id}
                    cartItemInfo={cartItem}
                />
            )}
        </section>
        <section className={`${styles.finalize} ${isCheckout && styles.center}`}>
            <div className={styles.total}>
                <span>Grand Total</span>
                <span><i className="fa-solid fa-indian-rupee-sign"></i>{totalFoodCost}</span>
            </div>
            {!isCheckout && <button className={`btn ${styles.checkout}`} onClick={checkoutHandler}>Chekout</button>}
        </section>
        {isCheckout && <Checkout onOrder={props.onOrder} onCancel={cancelCheckoutHandler} />}
    </>

    return (<Card className={styles.cart}>
        {!cartCtx.cart.length ? emptyText : cartItems}
    </Card>)
}

export default Cart