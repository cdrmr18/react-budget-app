import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card
 from "./Card";
 
const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.expenses.map( (expense) => (
              <ExpenseItem 
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}>
              </ExpenseItem>
            ))}
        </Card>
    )
}

export default Expenses;