import "./ExpenseItem.css";
import ExpenseCalendar from "./ExpenseCalendar";
import Card from "./Card";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseCalendar date={props.date} />
            <div className="expense-item-description">
                <h2>{props.title}</h2>
                <Card className="expense-item-price">$ {props.amount}</Card>
            </div>
        </Card>
    );
}

export default ExpenseItem;