import { useState } from "react";
import { createContext } from "react";

export const CountContext = createContext();

export const CountProvider = (props) => {
    const [countState, setCountState] = useState({
        count : 0,
        defaultCell: "cell"
    });


    return (
        <CountContext.Provider value = {[countState, setCountState]}>
            {props.children}    
        </CountContext.Provider>
    )

}