import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilterdYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
      console.log("In Expenses.js")
      setFilterdYear(selectedYear);
      console.log(selectedYear);
    }

    // 변수 filteredExpenses에 각 expense의 날짜의 full연도가 필터링된 연도와 같은 날짜를 가지고 있는 아이템만 필터링해서 할당해주는 코드
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    
    

    return (
      <div>
        <Card className="expenses">
          {/* selected라는 속성값에 초기값이 저장되어있는 state를 값으로 주게 되면 양방향 바인딩 가능!  */}
            <ExpensesFilter 
            selected={filteredYear} 
            onFilterChange={filterChangeHandler}/>
            {/* ExpenseList컴포넌트에 props로 filteredExpenses를 넘겨줘야함 */}
            <ExpensesList items={filteredExpenses}/>
        </Card>
     </div>
    )
}

export default Expenses;