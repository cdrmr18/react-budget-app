import "./ExpenseCalendar.css";
import Card from "../UI/Card";

const ExpenseCalendar = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    
    return (
        <Card className="expense-calendar">
            <div className="expense-month">{month}</div>
            <div className="expense-year">{year}</div>
            <div className="expense-day">{day}</div>
            
        </Card>
    )
}

export default ExpenseCalendar;