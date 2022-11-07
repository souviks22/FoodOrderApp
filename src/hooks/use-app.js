import { useState } from "react"

const useApp = () => {
    const [isCartShown, setIsCartShown] = useState(false)
    const [isConformationShown, setIsConformationShown] = useState(false)

    const cartShowHandler = () => {
        window.scrollTo(0, 0)
        setIsCartShown(true)
    }
    const cartCloseHandler = () => {
        setIsCartShown(false)
    }

    const conformationShowHandler = () => {
        window.scrollTo(0, 0)
        setIsConformationShown(true)
    }
    const conformationCloseHandler = () => {
        setIsConformationShown(false)
    }

    return [
        { isCartShown, cartShowHandler, cartCloseHandler },
        { isConformationShown, conformationShowHandler, conformationCloseHandler }
    ]
}

export default useApp