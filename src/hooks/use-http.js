import { useState, useCallback, useMemo } from "react"

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const data = useMemo(() => [], []);

    const httpRequest = useCallback((httpConfig, ...afterResponse) => {
        const { url, errorMessage, config = null } = httpConfig
        const sendRequest = async () => {
            setIsLoading(true)
            const response = await fetch(url, config)
            if (!response.ok)
                throw new Error(errorMessage);
            if (!config) {
                const mealsJson = await response.json()
                for (let mealId in mealsJson) {
                    const meal = mealsJson[mealId]
                    data.push({
                        id: mealId,
                        name: meal.name,
                        cost: meal.cost
                    })
                }
            }
            setIsLoading(false)
            setError(null)
        }
        const catchError = err => {
            setIsLoading(false)
            setError(err)
        }
        if (config) {
            const [orderHandler, clearCart] = afterResponse
            sendRequest().then(() => {
                orderHandler()
                clearCart()
            }).catch(catchError)
        }
        else {
            sendRequest().catch(catchError)
            return data;
        }
    }, [data])
    return [isLoading, error, httpRequest]
}

export default useHttp