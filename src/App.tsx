import React from 'react';
import './App.css';
// import {data1, data2, Tasks} from "./components/Tasks";
// import {TableCars, topCars} from "./components/TableCars";
import Button from "./components/Button";



function App() {
    const Button1Foo = (subscriber: string, age:number, address: string) => {
        return console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string, age:number, address: string) => {
        console.log(subscriber, age, address)
    }
    const ButtonStupid = () => {
        console.log('stupid button')
    }

    return (
        <div className="App">
            {/*<Tasks data={data1} />*/}
            {/*<Tasks data={data2}/>*/}
            {/*<TableCars data={topCars}/>*/}
            <Button name={'MyYoutubeChanel-1'} callBack={()=>Button1Foo('im ilya', 21, 'Unosti')}/>
            <Button name={'MyYoutubeChanel-2'} callBack={()=>Button2Foo('im vanya', 23, 'Mira')}/>
            <Button name={'ButtonStupid'} callBack={ButtonStupid}/>
        </div>
    );
}

export default App;
