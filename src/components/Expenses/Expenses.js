import React, { useState} from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [yearSelected, setYearSelected] = useState('2019');
    // function to transfer to expense filter and grab the new year to update expenses
    const addNewSelectedYearHandler = selectedYear => {
        setYearSelected(selectedYear)
    }
   
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === yearSelected;
    })

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter yearSelected={yearSelected} onNewSelectedYear={addNewSelectedYearHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </li>  
    )
}

export default Expenses;