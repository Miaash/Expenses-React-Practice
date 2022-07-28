import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'; // css파일 import하기
import React from 'react';

// 진짜 html이 아니다! react에서 사용하는 JSX이다!
const ExpenseItem = (props) => {
    // props쓰면 이제 밑에 고정된 값의 변수들 필요 없다
    // const expenseDate = new Date(2022, 6, 27); //Date는 객체이므로 내장 메서드 toISOString()로 문자열로 만들어주기
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.34;
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;