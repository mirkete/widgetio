import { useState } from "react";

export function useLocalStorage(key, initialValue){
    
    const [state, setState] = useState(() => {
        try{
            const localData = window.localStorage.getItem(key)
            return localData ? JSON.parse(localData) : initialValue
        } catch(e){
            return initialValue
        }
    })

    const updateState = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value))
        setState(value)
    }
    
    return [state, updateState]
}