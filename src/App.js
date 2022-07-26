import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450.34,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  // useState에서 초깃값은 DUMMY_EXPENSES
  // 사용자입력폼의 내용들은 내부에서 변할 수 있는 값이므로 state에 저장
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  
  const addExpenseHandler = (expense) => {
    
    // 기존에 있던 더미데이터의 값들을 배열에 직접 넣어주기보다
    // 기존에 있던 값들을 setExpenses의 인자로 전달해 배열에 넣어주면 뭔 차이일까 뭐지 뭔개소리지
    // setExpenses([expense, ...expenses])
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
      // console.log("In App.js");
      // console.log(expense);

    
  }

  return (
    <div>
      {/* 속성(property)이름은 맘대로 지어도 된다 */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  )
}

export default App;