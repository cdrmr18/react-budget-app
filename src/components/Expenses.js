import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
    return (
        <div className="expenses">
            {props.expenses.map( (expense) => (
              <ExpenseItem 
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}>
              </ExpenseItem>
            ))}
        </div>
    )
}

export default Expenses;