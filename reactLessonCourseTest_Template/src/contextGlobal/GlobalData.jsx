import { createContext, useState } from "react";

export const GlobalDataContext = createContext();

const GlobalDataProvider = ({children}) => {
    const [counter, setCounter] = useState(0);

    const addCounter = () => {
        setCounter((counter) => counter + 1);
    }

    return (
        <GlobalDataContext.Provider value={{counter, addCounter}}>
            {children}
        </GlobalDataContext.Provider>
    );
};

export default GlobalDataProvider;