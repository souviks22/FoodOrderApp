import FoodItem from "./FoodItem"
import Card from "../UI/Card"
import styles from './FoodCorner.module.css'
import { foodList } from "../../data"

const FoodCorner = () => {
    return (<Card className={styles['food-corner']}>
        {foodList.map(food =>
            <FoodItem
                key={food.id}
                foodInfo={{ ...food }}
            />
        )}
    </Card>)
}

export default FoodCorner