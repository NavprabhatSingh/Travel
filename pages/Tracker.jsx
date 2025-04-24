import React, { useEffect, useState } from 'react';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseList from '../components/ExpenseList';

const Tracker = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (newExpense) => {
    setExpenses(prev => [newExpense, ...prev]);
  };

  return (
    <div className="tracker-page">
      <h2>Trip Expense Tracker</h2>
      <AddExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Tracker;
