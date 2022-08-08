import FoodCorner from "./FoodCorner"
import Newsletter from "./Newsletter"
import styles from './Content.module.css'


const Content = () => {
    return (<div className={styles.content}>
        <Newsletter />
        <FoodCorner />
    </div>)
}

export default Content