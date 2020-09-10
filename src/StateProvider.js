import React, { createContext, useContext, useReducer } from "react"

//prepares the datalayer
export const StateContext = createContext();  

//wrap our app and provide the dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information form the data layer
export const useStateValue = () => useContext(StateContext);