import { useState, useEffect, useContext } from 'react'
import styles from './CartButton.module.css'
import CartContext from '../../cart-context'

const CartButton = (props) => {
    const [hasBump, setHasBump] = useState(false)
    const { cart, totalFood } = useContext(CartContext)
    useEffect(() => {
        setHasBump(true)
        const animate = setTimeout(() => { setHasBump(false) }, 300)
        return () => { clearTimeout(animate) }
    }, [cart])
    return (
        <button className={`btn btn-lg ${styles['cart-button']} ${hasBump && styles.bump}`} onClick={props.onClick}>
            <span>Cart</span>
            <div className={styles['total-counter']}>
                <span>{totalFood}</span>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </button>
    )
}

export default CartButton