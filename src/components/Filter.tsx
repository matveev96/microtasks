import React, {useState} from 'react';

export const Filter = () => {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const curMoney = money.filter(item => {
        return item.banknots === 'RUBLS'
    })

    return (
        <ul>
            {curMoney.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknots}</span>
                        <span>{objFromMoneyArr.value}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
    );
};
