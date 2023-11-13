// 'use client';

// import React, { createContext, useCallback, useContext, useMemo } from 'react';
// import { useLocalStorage } from 'usehooks-ts';

// type DeliveryContextProps = {
//   children: React.ReactNode;
// };

// type DeliveryContext = {
//   selectedDelivery: string | null;
  
// };

// type ActionsContextProps = {
//   chooseDelivery: (delivery: string | null) => void;
// };

// const Context = createContext<DeliveryContext | null>(null);
// const ActionsContext = createContext<ActionsContextProps | null>(null);

// export const DeliveryContextProvider = ({ children }: DeliveryContextProps) => {
//   const [selectedDelivery, setSelectedDelivery] = useLocalStorage<
//     string | null
//   >('selectedDelivery', null);

//   const chooseDelivery = useCallback(
//     (delivery: string | null) => {
//       setSelectedDelivery(delivery);
//     },
//     [setSelectedDelivery]
//   );

//   const contextValue = useMemo(
//     () => ({
//       selectedDelivery,
//     }),
//     [selectedDelivery]
//   );

//   return (
//     <Context.Provider value={contextValue}>
//       <ActionsContext.Provider value={{ chooseDelivery }}>
//         {children}
//       </ActionsContext.Provider>
//     </Context.Provider>
//   );
// };

// export const useDeliveryContext = () => {
//   const context = useContext(Context);
//   if (!context)
//     throw new Error('useStateContext must be used within a ContextProvider');

//   return context;
// };

// export const useDeliveryActionsContext = () => {
//   const context = useContext(ActionsContext);
//   if (!context)
//     throw new Error(
//       'useStateActionsContext must be used within a ContextProvider'
//     );

//   return context;
// };
