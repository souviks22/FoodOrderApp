import Card from "../UI/Card"
import CountButton from "../UI/CountButton"
import styles from './FoodItem.module.css'

const FoodItem = (props) => {
    return (<Card className={styles['food-item']}>
        <h4>{props.foodInfo.name}</h4>
        <div className={styles.action}>
            <h4><i className="fa-solid fa-indian-rupee-sign"></i>{props.foodInfo.cost}</h4>
            <CountButton foodInfo={props.foodInfo} />
        </div>
    </Card>)
}

export default FoodItem