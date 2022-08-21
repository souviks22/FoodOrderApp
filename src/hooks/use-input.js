import { useState, useEffect } from "react"

const checkLength = (input, minLength, exact) => {
    if (exact)
        return input.length === minLength;
    return input.length >= minLength;
}

const useInput = (minLength, exact = false) => {
    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isTouched, setIsTouched] = useState(false)
    const isInvalid = isTouched && !isValid

    useEffect(() => {
        if (!isTouched) return;
        const autoValidity = setTimeout(() => {
            setIsValid(checkLength(value, minLength, exact))
        }, 200)
        return () => { clearTimeout(autoValidity) }
    }, [isTouched, value, minLength, exact])

    const changeHandler = event => {
        if (!isTouched)
            setIsTouched(true);
        setValue(event.target.value.trim())
    }
    return [isTouched, isInvalid, changeHandler];
}

export default useInput