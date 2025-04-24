// src/components/ExpenseList.jsx
import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h3>Expenses</h3>
      {expenses.length === 0 && <p>No expenses yet!</p>}
      {expenses.map(exp => (
        <div key={exp.id} className="expense-item">
          <strong>{exp.title}</strong> — ${exp.amount} | {exp.category} | {exp.date}
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
