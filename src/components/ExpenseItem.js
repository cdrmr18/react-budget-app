import "./ExpenseItem.css";
import ExpenseCalendar from "./ExpenseCalendar";

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenseCalendar date={props.date} />
            <div className="expense-item-description">
                <h2>{props.title}</h2>
                <div className="expense-item-price">$ {props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;