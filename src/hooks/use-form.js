import { useRef, useContext } from "react"
import useInput from "./use-input"
import CartContext from "../cart-context"
import useHttp from "./use-http"

const useForm = (orderHandler) => {
    const { cart, clearCart } = useContext(CartContext)
    const [isLoading, postError, placeOrder] = useHttp()

    const firstNameRef = useRef(''), lastNameRef = useRef(''), addressRef = useRef(''), cityRef = useRef(''), pincodeRef = useRef(0)
    const [isFirstNameTouched, isFirstNameInvalid, firstNameChangeHandler] = useInput(2)
    const [isLastNameTouched, isLastNameInvalid, lastNameChangeHandler] = useInput(3)
    const [isAddressTouched, isAddressInvalid, addressChangeHandler] = useInput(10)
    const [isCityTouched, isCityInvalid, cityChangeHandler] = useInput(2)
    const [isPincodeTouched, isPincodeInvalid, pincodeChangeHandler] = useInput(6, true)

    const isFormTouched = isFirstNameTouched && isLastNameTouched && isAddressTouched && isCityTouched && isPincodeTouched
    const isFormValid = !(isFirstNameInvalid || isLastNameInvalid || isAddressInvalid || isCityInvalid || isPincodeInvalid)

    const postHttpConfig = {
        url: 'https://foodorder-4202d-default-rtdb.firebaseio.com/orders.json',
        errorMessage: 'Something went wrong',
        config: {
            method: 'post',
            body: JSON.stringify({
                customer: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
                address: `${addressRef.current.value}, ${cityRef.current.value} - ${pincodeRef.current.value}`,
                items: cart.map(cartItem => ({
                    name: cartItem.name,
                    count: cartItem.count
                })),
                totalCost: cart.reduce((runningCost, currentItem) => runningCost + currentItem.cost * currentItem.count, 0)
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }

    const submitHandler = event => {
        event.preventDefault()
        if (!isFormValid) {
            if (isFirstNameInvalid) firstNameRef.current.focus();
            else if (isLastNameInvalid) lastNameRef.current.focus();
            else if (isAddressInvalid) addressRef.current.focus();
            else if (isCityInvalid) cityRef.current.focus();
            else pincodeRef.current.focus();
            return;
        }
        placeOrder(postHttpConfig, orderHandler, clearCart)
    }

    return [isFormTouched, submitHandler, isLoading, postError, [
        { firstNameRef, isFirstNameInvalid, firstNameChangeHandler },
        { lastNameRef, isLastNameInvalid, lastNameChangeHandler },
        { addressRef, isAddressInvalid, addressChangeHandler },
        { cityRef, isCityInvalid, cityChangeHandler },
        { pincodeRef, isPincodeInvalid, pincodeChangeHandler }
    ]]
}

export default useForm