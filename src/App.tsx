import React from 'react';
import './App.css';
import {data1, data2, Tasks} from "./components/Tasks";
import {TableCars, topCars} from "./components/TableCars";


// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.


function App() {

    return (
        <div className="App">
            <Tasks data={data1} />
            <Tasks data={data2}/>
            <TableCars data={topCars}/>
        </div>
    );
}

export default App;

