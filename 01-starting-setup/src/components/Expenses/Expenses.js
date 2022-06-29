import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFiltedYear] = useState("2020");
  const filterYearChangeHandler = (selectedYear) => {
    setFiltedYear(selectedYear);
  };
  const filteredExpenses = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFiltedYear={filterYearChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

// {filteredExpenses.length === 0 ? (
//   <p>No Expense Found</p>
// ) : (
//   filteredExpenses.map((element, index) => {
//     return (
//       <ExpenseItem key={index} title={element.title} amount={element.amount} date={element.date}></ExpenseItem>
//     );
//   })
// )}

// {filteredExpenses.length === 0 && <p>No Expense Found.</p>}
//       {filteredExpenses.length > 0 &&
//         filteredExpenses.map((element, index) => {
//           return (
//             <ExpenseItem key={index} title={element.title} amount={element.amount} date={element.date}></ExpenseItem>
//           );
//         })}
