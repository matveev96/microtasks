import React from 'react';

export type DataType = {
    manufacturer: string
    model: string
}

export type TopCarsType = {
    data: DataType[]
}

export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

export const TableCars = ({data}: TopCarsType) => {
    const carsManufacturer = topCars.map((item: DataType, index: number) => {
        return (
                <tr key={index}>
                    <th>{index + 1} {item.manufacturer}</th>
                </tr>
        )
    })
    const carsModel = topCars.map((item: DataType, index: number) => {
        return (
            <tr key={index}>
                <th> {item.model}</th>
            </tr>
        )
    })
    return (
        <table>
            <thead>{carsManufacturer}</thead>
            <tbody>{carsModel}</tbody>
        </table>
    );
};

