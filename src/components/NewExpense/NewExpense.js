import React, { useState} from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random()).toString()
        };
        // passing expense data up to app.js
        props.onNewExpense(expenseData)
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} > 
                Add New Expense
            </button>}
            {isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel= {stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;