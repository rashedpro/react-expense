import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//const expense = [
//{ title: "Car Insurance", amount: 294.67, date: new Date(2022, 6, 14) },
// { title: "Rent", amount: 214.67, date: new Date(2022, 5, 28) },
//{ title: "class Fees", amount: 45, date: new Date(2022, 6, 12) },
//{ title: "Item Purches", amount: 55, date: new Date(2022, 6, 21) },
//];
const App = () => {
  const [expenseItem, setExpenseItem] = useState([
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 6, 14) },
    { title: "Rent", amount: 214.67, date: new Date(2022, 5, 28) },
    { title: "class Fees", amount: 45, date: new Date(2022, 6, 12) },
    { title: "Item Purches", amount: 55, date: new Date(2022, 6, 21) },
  ]);
  const addExpenseHandler = (expense) => {
    setExpenseItem((prevState) => {
      return [expense, ...prevState];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenseItem}></Expenses>
    </div>
  );
};

export default App;
