import React, { useContext, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { motion } from "framer-motion";
import { GlobalContext } from '../context/GlobalState';
// import "./Chart.css";


export const PieChart = () => {

  const { transactions } = useContext(GlobalContext);

  const totalExpenses = Math.abs(transactions
    .filter(transaction => transaction.transactionType === 'expense')
    .reduce((acc, transaction) => acc += transaction.amount, 0)
    .toFixed(2))

  const totalIncome = transactions
    .filter(transaction => transaction.transactionType === 'income')
    .reduce((acc, transaction) => acc += transaction.amount, 0)
    .toFixed(2)

  const series = [+totalIncome, +totalExpenses];

  const options = {
    chart: {
      type: "pie",
      width: 380
    },
    colors: ['#26F07A', '#F95F4E'],
    labels: ['Total Income', 'Total Expenses'],

    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <motion.div
      className="chart donut-chart"
      initial={{ opacity: 0, y: 100 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <h3 className="chart-title">Total Amounts</h3>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={380}
      />
    </motion.div >
  )
}