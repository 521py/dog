import { useEffect, useState } from "react"


export const useDebounce = (value, tm = 5000) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(value)
        }, tm);

        return () => {
            clearTimeout(timeoutId)
        }
    }, [tm, value])
    return debounceValue;
}