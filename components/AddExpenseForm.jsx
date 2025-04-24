import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    category: 'General',
    date: ''
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.title || !expense.amount || !expense.date) {
      alert('Please fill out all fields');
      return;
    }

    const newExpense = {
      ...expense,
      id: Date.now()
    };

    onAddExpense(newExpense);
    setExpense({ title: '', amount: '', category: 'General', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input type="text" name="title" placeholder="Expense Title" value={expense.title} onChange={handleChange} />
      <input type="number" name="amount" placeholder="Amount" value={expense.amount} onChange={handleChange} />
      <select name="category" value={expense.category} onChange={handleChange}>
        <option>General</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Accommodation</option>
        <option>Entertainment</option>
      </select>
      <input type="date" name="date" value={expense.date} onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
