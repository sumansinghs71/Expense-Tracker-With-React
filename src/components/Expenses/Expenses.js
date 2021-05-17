import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList"
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeHandlers = (year) => {
    setFilteredYear(year);
    // console.log("sss", year);
  };

  const filteredExpenses = props.expenses.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearChange={changeHandlers} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
