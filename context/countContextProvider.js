import React, { createContext, useContext } from 'react';

export const CountContext = createContext();

export default function CountContextProvider({ children }) {
    const [count, setCount] = React.useState(10000);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
}

export function useCountContext() {
    return useContext(countContext)
}