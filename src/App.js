
import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// 연습용 데이터 묶음 같은 것, state를 초기화하는데 사용할 수 있음
const DUMMY_EXPENSES = [
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
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // useState에서 초깃값은 DUMMY_EXPENSES
  // 사용자입력폼의 내용들은 내부에서 변할 수 있는 값이므로 state에 저장


  const addExpenseHandler = (expense) => {
    // 여기서 expense는 입력한 새로운 값이고 ...expenses는 기존의 값 => 배열에 담아준다
    // setExpenses([expense, ...expenses])
   
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* 속성을 Expenses파일에 있는 속성과 같아야함 */}
    </div>
  );
}

export default App;
