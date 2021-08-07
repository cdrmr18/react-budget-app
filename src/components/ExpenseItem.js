import "./ExpenseItem.css";

const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <div>Aug 8, 2021</div>
            <div className="expense-item-description">
                <h2>Rent</h2>
                <div className="expense-item-price">$250</div>
            </div>
        </div>
    );
}

export default ExpenseItem;