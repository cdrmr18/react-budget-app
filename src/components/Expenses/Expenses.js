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
   
    return (
        <div>
            <ExpensesFilter yearSelected={yearSelected} onNewSelectedYear={addNewSelectedYearHandler} />
            <Card className="expenses">
                {props.expenses.map( (expense) => (
                <ExpenseItem 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}>
                </ExpenseItem>
                ))}
            </Card>
        </div>  
    )
}

export default Expenses;