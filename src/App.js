import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Book 1",
    amount: 100,
    date: new Date(2021, 7, 14),
  },
  { id: "e2", title: "TV", amount: 12000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Rent",
    amount: 350,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Mobile Recharge",
    amount: 450,
    date: new Date(2021, 6, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
