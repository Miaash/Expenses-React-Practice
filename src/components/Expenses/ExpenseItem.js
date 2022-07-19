import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'; // css파일 import하기
import React, { useState } from 'react';

// 진짜 html이 아니다! react에서 사용하는 JSX이다!
const ExpenseItem = (props) => {
    // props쓰면 이제 밑에 고정된 값의 변수들 필요 없다
    // const expenseDate = new Date(2022, 6, 27); //Date는 객체이므로 내장 메서드 toISOString()로 문자열로 만들어주기
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.34;

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        // TIP: parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않습니다
        // TODO : 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신되도록 함수를 완성하세요.
        setTitle('Updated!');
        console.log(title);
      };
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* card태그 안에 있는 요소들은 props.children이다. reserve어 (예약어) */}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;