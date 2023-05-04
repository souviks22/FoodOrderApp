import { useContext } from "react"
import styles from './CountButton.module.css'
import CartContext from "../../cart-context"

const CountButton = (props) => {
    const cartCtx = useContext(CartContext)
    const foodIndex = cartCtx.cart.findIndex(cartItem => cartItem.id === props.foodInfo.id)

    const increaseHandler = () => {
        cartCtx.addFood(props.foodInfo)
    }
    const decreaseHandler = () => {
        cartCtx.removeFood(props.foodInfo)
    }

    return (<>
        {!cartCtx.cart[foodIndex]
            ?
            <div className={styles['add-button']}>
                <button className='btn' onClick={increaseHandler}>
                    <i className="fa-solid fa-plus"></i><span>Add</span>
                </button>
            </div>
            :
            <div className={styles['count-button']}>
                <button className='btn' onClick={decreaseHandler}>
                    <i className="fa-solid fa-minus"></i>
                </button>
                <span>{cartCtx.cart[foodIndex].count}</span>
                <button className='btn' onClick={increaseHandler}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        }
    </>)
}

export default CountButton