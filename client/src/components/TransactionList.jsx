import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  // const context = useContext(GlobalContext);
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // to stop the warning:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}

      </ul>
    </>
  )
}


// If you make an http request from a component, call it in useEffect.