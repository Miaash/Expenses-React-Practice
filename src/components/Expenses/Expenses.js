import React, { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilterdYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
      console.log("In Expenses.js")
      setFilterdYear(selectedYear);
      console.log(selectedYear);
    }

    // 변수 filteredExpenses에 각 expense의 날짜의 full연도가 필터링된 연도와 같은 날짜를 가지고 있는 아이템만 필터링해서 할당해주는 코드
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    // 변경 가능한 변수로 할당해서 깔끔하게 작성하기
    let expenseContent = <p>No expenses found.</p>;
    
    if(filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
            // Warning: Each child in a list should have a unique "key" prop.
            // 위와 같은 오류메시지: 특정 컨텐츠를 갖는 모든 아이템들은 분명하게 고유한 id를 갖고 있어야 함 -> key속성 적어주기
            // 더미데이터에서 고유한 id 사용
            // 아이템이 위치해야할 곳 까지 인식함
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
             date={expense.date} />
             ))   
    }
    

    return (
      <div>
        <Card className="expenses">
          {/* selected라는 속성값에 초기값이 저장되어있는 state를 값으로 주게 되면 양방향 바인딩 가능!  */}
            <ExpensesFilter 
            selected={filteredYear} 
            onFilterChange={filterChangeHandler}/>
            {expenseContent}
        </Card>
     </div>
    )
}

export default Expenses;