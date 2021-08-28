import React, { useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
 
const Expenses = (props) => {
    const [yearSelected, setYearSelected] = useState('2019');
    // function to transfer to expense filter and grab the new year to update expenses
    const addNewSelectedYearHandler = selectedYear => {
        setYearSelected(selectedYear)
    }
   
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === yearSelected;
    })

    let expensesContent = <h2>No expenses found</h2>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map( (expense) => (
            <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}>
            </ExpenseItem>
            ))
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter yearSelected={yearSelected} onNewSelectedYear={addNewSelectedYearHandler} />
                {expensesContent}
            </Card>
        </div>  
    )
}

export default Expenses;