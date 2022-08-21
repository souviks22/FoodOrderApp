import React from 'react'
import styles from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return <div className={`${styles.input} ${props.className} ${props.isInvalid && styles.invalid}`}>
        <label htmlFor={props.spec.id}>{props.label}</label>
        <div>
            <input
                className="form-control"
                ref={ref}
                name={props.spec.id}
                {...props.spec}
            />
        </div>
    </div>
})

export default Input