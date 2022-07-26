import React, { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filtered, setFilterd] = useState('2020');
    const filterChangeHandler = (filteredYear) => {
      console.log("In Expenses.js")
      setFilterd(filteredYear);
      console.log(filteredYear);
    }

    return (
      <div>
        <Card className="expenses">
          {/* selected라는 속성값에 초기값이 저장되어있는 state를 값으로 주게 되면 양방향 바인딩 가능!  */}
            <ExpensesFilter selected={filtered} onFilterChange={filterChangeHandler}/>
            {props.items.map((expense) => (
                <ExpenseItem 
                title={expense.title}
                amount={expense.amount}
                 date={expense.date} />
                 ))}
        </Card>
     </div>
    )
}

export default Expenses;