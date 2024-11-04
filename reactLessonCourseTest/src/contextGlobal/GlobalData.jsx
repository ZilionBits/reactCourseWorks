import { createContext, useState } from "react";

export const GlobalDataContext = createContext();

const GlobalDataProvider = ({children}) => {
    const [booksData, setBooksData] = useState([]);

    return (
        <GlobalDataContext.Provider value={{booksData, setBooksData}}>
            {children}
        </GlobalDataContext.Provider>
    );
};

export default GlobalDataProvider;