import React, { createContext, useContext } from 'react';

const countContext = createContext();

export default function CountContextProvider({ children }) {
    const [count, setCount] = React.useState(1000);

    return (
        <countContext.Provider value={{ count, setCount }}>
            {children}
        </countContext.Provider>
    );
}

export function useCountContext() {
    return useContext(countContext)
}