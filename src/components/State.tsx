import React, {useState} from 'react';

const State = () => {

    // let a: number = 1;
    let[a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a);
        console.log(a);
    }
    const onClickHandlerReset = () => {
        setA(a = 0);
        console.log(a);
    }

    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerReset}>0</button>
        </>
    );
};

export default State;