import { useState, useEffect, type Dispatch, type SetStateAction } from "react";

export function usePersistentState<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [state, setState] = useState<T>(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) as T : defaultValue;
        } catch {
            return defaultValue
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch {
            console.error("There was an error reaching Local Storage")
        }
    }, [key, state]);

    return [state, setState]
}