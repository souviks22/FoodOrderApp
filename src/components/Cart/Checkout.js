import useForm from "../../hooks/use-form"
import Input from "../UI/Input"
import Card from "../UI/Card"
import styles from './Checkout.module.css'

const Checkout = (props) => {
    const [isFormTouched, formSubmitHandler, isLoading, postError, [
        { firstNameRef, isFirstNameInvalid, firstNameChangeHandler },
        { lastNameRef, isLastNameInvalid, lastNameChangeHandler },
        { addressRef, isAddressInvalid, addressChangeHandler },
        { cityRef, isCityInvalid, cityChangeHandler },
        { pincodeRef, isPincodeInvalid, pincodeChangeHandler }
    ]] = useForm(props.onOrder)

    const loadingSpinner = <div className="spinner-border text-light" role="status">
        <span className="sr-only">Loading...</span>
    </div>

    return <Card className={styles.form}>
        <form className='form-control' onSubmit={formSubmitHandler}>
            <div className="row">
                <Input
                    ref={firstNameRef}
                    className="col-sm-6"
                    isInvalid={isFirstNameInvalid}
                    label='First Name'
                    spec={{
                        type: 'text',
                        id: 'fname',
                        placeholder: 'Souvik',
                        onChange: firstNameChangeHandler,
                    }} />
                <Input
                    ref={lastNameRef}
                    className="col-sm-6"
                    isInvalid={isLastNameInvalid}
                    label='Last Name'
                    spec={{
                        type: 'text',
                        id: 'lname',
                        placeholder: 'Sarkar',
                        onChange: lastNameChangeHandler,
                    }} />
            </div>
            <div className="row">
                <Input
                    ref={addressRef}
                    className="col-sm-6"
                    isInvalid={isAddressInvalid}
                    label='Address'
                    spec={{
                        type: 'text',
                        id: 'address',
                        placeholder: '30/23, Nayapatty Road',
                        onChange: addressChangeHandler,
                    }} />
                <Input
                    ref={cityRef}
                    className="col-sm-3"
                    isInvalid={isCityInvalid}
                    label='City'
                    spec={{
                        type: 'text',
                        id: 'city',
                        placeholder: 'Kolkata',
                        onChange: cityChangeHandler,
                    }} />
                <Input
                    ref={pincodeRef}
                    className="col-sm-3"
                    isInvalid={isPincodeInvalid}
                    label='Pincode'
                    spec={{
                        type: 'number',
                        id: 'pincode',
                        placeholder: '700055',
                        onChange: pincodeChangeHandler,
                    }} />
            </div>
            <div className={styles.actions}>
                <button className="btn btn-outline-danger" type="button" onClick={props.onCancel}>Withdraw</button>
                <button className="btn btn-success" type="submit" disabled={!isFormTouched}>Place Order</button>
            </div>
            {postError && <p className={styles.error}><i className="fa-solid fa-triangle-exclamation"></i>{postError.message}</p>}
        </form>
        {isLoading && loadingSpinner}
    </Card>
}

export default Checkout