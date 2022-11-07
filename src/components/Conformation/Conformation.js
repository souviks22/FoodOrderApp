import Card from '../UI/Card'
import styles from './Conformation.module.css'

const Conformation = () => {
    return (<Card className={styles.conform}>
        <p className='display-6'>Yay! Your order has been placed<i className="fa-regular fa-face-smile-wink"></i></p>
        <div className={styles.checkmark}>
            <img className='img-fluid' src="/conform.png" alt="conform" />
        </div>
    </Card>)
}

export default Conformation