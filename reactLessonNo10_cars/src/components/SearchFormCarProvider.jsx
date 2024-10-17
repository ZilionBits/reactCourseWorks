import { createContext, useState } from "react";

export const SearchFormCarContext = createContext();

export const SearchFormCarProvider = ({children}) => {

    const [searchData, setSearchData] = useState({
        brand: "",
        year: [],
        priceFrom: "",
        priceTo: "",
      });

    return (
        <SearchFormCarContext.Provider value={{searchData, setSearchData}}>
            {children}
        </SearchFormCarContext.Provider>
    );
};