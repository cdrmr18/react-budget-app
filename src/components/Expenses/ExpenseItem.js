import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseCalendar from "./ExpenseCalendar";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const changeTitle = () => {
       setTitle('updated');
    }
    return (
        <Card className="expense-item">
            <ExpenseCalendar date={props.date} />
            <div className="expense-item-description">
                <h2>{title}</h2>
                <Card className="expense-item-price">$ {props.amount}</Card>
            </div>
            <button onClick={changeTitle} >Change Title</button>
        </Card>
    );
}

export default ExpenseItem;