import {createContext, useContext, useState} from "react";

const tripAdvisorContext = createContext()

const TripAdvisorContextProvider = ({children}) => {


    return (
        <tripAdvisorContext.Provider value={''}>
            {children}
        </tripAdvisorContext.Provider>
    )
}

const useGlobaltrips = () => useContext(tripAdvisorContext)

export {TripAdvisorContextProvider, useGlobaltrips}