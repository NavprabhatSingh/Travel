// src/App.js
import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  // State for the budget and expenses
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  
  // Function to calculate total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  
  // Calculate the remaining budget
  const remainingBudget = budget - totalExpenses;

  // Calculate percentage of budget spent
  const budgetPercentage = totalExpenses > 0 ? (totalExpenses / budget) * 100 : 0;

  return (
    <div className="App">
      <h1>Trip Budget Tracker</h1>
      
      {/* Budget Input */}
      <div className="budget-input">
        <label>
          Set Your Budget: $
          <input 
            type="number" 
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            placeholder="Enter your total budget"
          />
        </label>
      </div>

      {/* Expenses Section */}
      <div className="expenses">
        <h2>Expenses</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense.name}: ${expense.amount}</li>
          ))}
        </ul>
      </div>

      {/* Progress Tracker */}
      <div className="progress-tracker">
        <h2>Budget Progress</h2>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${budgetPercentage}%` }}
          ></div>
        </div>
        <p>Budget Used: ${totalExpenses} / ${budget}</p>
        {budgetPercentage >= 80 && (
          <p style={{ color: 'red' }}>Warning: You're nearing your budget limit!</p>
        )}
      </div>

      {/* Add Expense Form */}
      <div className="add-expense">
        <h2>Add Expense</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.expenseName.value;
          const amount = parseFloat(e.target.expenseAmount.value);
          setExpenses([...expenses, { name, amount }]);
          e.target.reset();
        }}>
          <input 
            type="text" 
            name="expenseName" 
            placeholder="Expense name"
            required
          />
          <input 
            type="number" 
            name="expenseAmount" 
            placeholder="Amount"
            required
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    </div>
  );
}

export default App;
