import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);

    return (
        <div className="balance-container">
            <h4>Your Balance</h4>
            <h2 className={total >= 0 ? "plus" : "minus"}>${numberWithCommas(total)}</h2>
        </div>
    )
}
