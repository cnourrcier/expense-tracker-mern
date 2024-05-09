import './App.css'
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { PieChart } from './components/PieChart';

import { GlobalProvider } from './context/GlobalState';

function App() {

  return (
    <GlobalProvider>
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className='col'>
            <PieChart />
            <Balance />
            <IncomeExpenses />
          </div>
          <div className='col transactions-container'>
            <TransactionList />
          </div>
        </div>
        <div className="row">
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
