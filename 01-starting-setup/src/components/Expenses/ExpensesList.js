import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> found no expense</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((element, index) => {
        return (
          <ExpenseItem key={index} title={element.title} amount={element.amount} date={element.date}></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpenseList;
