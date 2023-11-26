'use client';

import { createContext, useContext, useEffect, useState } from "react"

type FilterContextI = {
  filterVar: string[] | [];
  modifyFilter: (p: string) => void;
};


type FilterContextProps = {
  children: React.ReactNode;
};


const FilterContext = createContext<FilterContextI| undefined>(undefined);

export const FilterProvider = ( { children }: FilterContextProps ) => {

  const [filterVar, setFilterVar] = useState<string[]>([]);

  const modifyFilter = (param: string) => {

    setFilterVar(prevFilterVar => {
      if (prevFilterVar.includes(param)) {
        return prevFilterVar.filter(par => par !== param);
      } else {
        return [...prevFilterVar, param];
      }
    });
  }

  useEffect(() => {
    console.log('Updated filterVar', filterVar);
  }, [filterVar]);


  return(
    <FilterContext.Provider value={{filterVar, modifyFilter}}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error(
      'useFilterContext must be used within a ContextProvider'
    );
  return context;
};
