import './Cell.css';
import React, { useContext, useEffect, useState } from 'react';
import  { CountContext } from '../CountProvider'; 



const Cell = () => {  

    const [countTrackerState, setCountTrackerState] = useContext(CountContext);
    
    const count = countTrackerState.count;

    const initialCellNameState =  "cell";
    const [cellNameState, setCellNameState] = useState(initialCellNameState);
   
    
   

    function changeCount() {
        const newCount =  cellNameState === "cell" ? countTrackerState.count + 1 : countTrackerState.count - 1;
        const newCellClassName = cellNameState   === "cell" ? "selected" : "cell";
        setCountTrackerState({
          ...countTrackerState,
          count: newCount,
        })
        setCellNameState(newCellClassName)
       
      
    }
    
    return (  
        <div onClick={changeCount}  className={cellNameState} >
        </div>
        
     );

}


export default Cell;