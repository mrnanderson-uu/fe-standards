import React, {useState} from 'react';

export const NoReactContext = React.createContext();

export const NoReactQueryExContextProvider = ({children})=>{
    const [noReactState, setNoReactState] = useState({universities:[]});
    return(
        <NoReactContext.Provider value={{noReactState,setNoReactState}}>
            {children}
        </NoReactContext.Provider>
    )
}