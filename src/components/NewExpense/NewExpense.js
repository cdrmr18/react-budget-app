import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random()).toString()
        };
        console.log(expenseData)
    };

    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;