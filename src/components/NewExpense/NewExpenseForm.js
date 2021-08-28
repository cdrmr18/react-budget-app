import "./NewExpenseForm.css";
import React, { useState} from "react";

const NewExpenseForm = (props) => {
    // handler functions to set expense object from form inputs
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Grabbing data from title form input and setting variable
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
    // Grabbing data from amount form input and setting variable
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }
    // Grabbing data from date form input and setting variable
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }
    // Collecting form data and reseting form to blank
    const submitHandler = (e) => {
        e.preventDefault()
        // create form data object
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        // execute parent transferred function newexpense.js
        props.onSaveExpenseData(expenseData);
              
        // reset input values
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    };

    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount}  onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expenses</button>
                </div>
            </div>
        </form>
    )
};

export default NewExpenseForm;