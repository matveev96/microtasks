import React from 'react';
// import { MouseEvent } from 'react';

export type ButtonProps = {
    name: string
    callBack: () => void;
}

export const Button = ({name, callBack} : ButtonProps) => {

    // const myFirstSub = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello I'm Vasya")
    // }
    //
    // const mySecSub = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello I'm Denis")
    // }
    // const onClickHandler = (name:string) => {
    //     console.log(`Hello, ${name}`)
    // }
    // const foo1 = () => {
    //     console.log('100200');
    // }
    // const foo2 = (name: string) => {
    //     console.log(name)
    // }
    const onClickHandler = () => {
        callBack()
    }
    return (
        <>
            <button onClick={onClickHandler}>{name}</button>



            {/*<button onClick={foo1} >1</button>*/}
            {/*<button onClick={() => foo2('100200')} >2</button>*/}

            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Vasia')} type="button">*/}
            {/*    MyYoutubeChanel-1*/}
            {/*</button>*/}

        </>

    );
};

export default Button;