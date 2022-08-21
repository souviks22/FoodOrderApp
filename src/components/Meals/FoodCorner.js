import { useState, useEffect } from "react"
import FoodItem from "./FoodItem"
import Card from "../UI/Card"
import styles from './FoodCorner.module.css'
import useHttp from "../../hooks/use-http"

const FoodCorner = () => {
    const [foodList, setFoodList] = useState([])
    const [isLoading, fetchError, fetchMeals] = useHttp()

    useEffect(() => {
        const getHttpConfig = {
            url: 'https://foodorder-4202d-default-rtdb.firebaseio.com/meals.json',
            errorMessage: 'Failed to fetch meals'
        }
        setFoodList(fetchMeals(getHttpConfig))
    }, [fetchMeals])

    const loadingSpinner = <div className="spinner-border text-light" role="status">
        <span className="sr-only">Loading...</span>
    </div>

    return (<Card className={styles['food-corner']}>
        {isLoading && loadingSpinner}
        {foodList.map(food =>
            <FoodItem
                key={food.id}
                foodInfo={food}
            />
        )}
        {fetchError && <p className={styles.error}><i className="fa-solid fa-triangle-exclamation"></i>{fetchError.message}</p>}
    </Card>)
}

export default FoodCorner