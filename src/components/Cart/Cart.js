import React, { useContext } from 'react'
import CartItem from './CartItem'
import Card from '../UI/Card'
import styles from './Cart.module.css'
import CartContext from '../../cart-context'

const Cart = () => {
    const cartCtx = useContext(CartContext)
    const emptyText = <p>Cart is Empty</p>
    const totalFoodCost = cartCtx.cart.reduce((accumulator, currentValue) => accumulator + currentValue.cost * currentValue.count, 0)
    const cartItems = <>
        <section className={styles['cart-items']}>
            {cartCtx.cart.map(cartItem =>
                <CartItem
                    key={cartItem.id}
                    cartItemInfo={{ ...cartItem }}
                />
            )}
        </section>
        <section className={styles.finalize}>
            <div className={styles.total}>
                <span>Grand Total</span>
                <span><i className="fa-solid fa-indian-rupee-sign"></i>{totalFoodCost}</span>
            </div>
            <button className={`btn ${styles.order}`}>Place Order</button>
        </section>
    </>

    return (<Card className={styles.cart}>
        {!cartCtx.cart.length ? emptyText : cartItems}
    </Card>)
}

export default Cart