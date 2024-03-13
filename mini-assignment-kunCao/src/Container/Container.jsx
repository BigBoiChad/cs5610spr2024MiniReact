import React, { useContext } from 'react';
import './Container.css';
import Cell from "../Cell/Cell"
import { CountContext } from '../CountProvider';
import { useState } from 'react';



const Container = () =>{

    const [countTrackerState, setCountTrackerState] = useContext(CountContext);
    const count = countTrackerState.count;

    const refreshContainer = () => {
        // Reset count to zero
        setCountTrackerState({
            count: 0
        })
    }

    return (
     <>
        <h1> Count: {countTrackerState.count} </h1>
        <div className= "container">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
     </>
    );
}

export default Container;