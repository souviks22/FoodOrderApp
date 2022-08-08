import Card from "../UI/Card"
import CountButton from "../UI/CountButton"
import styles from './CartItem.module.css'

const CartItem = (props) => {
    return (<Card className={styles['cart-item']}>
        <h4>{props.cartItemInfo.name}</h4>
        <div className={styles.action}>
            <h4><i className="fa-solid fa-indian-rupee-sign"></i>{props.cartItemInfo.cost * props.cartItemInfo.count}</h4>
            <CountButton foodInfo={props.cartItemInfo} />
        </div>
    </Card>)
}

export default CartItem