import React, {useState} from "react";
import "./ExpenseForm.css";
// 여기는 새로운 expense의 데이터를 받는 컴포넌트입니다. NewExpense의 자식입니다.


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })



    const titleChangeHandler = (event) => {
        // value는 이벤트가 발생했을 때의 현재입력값을 가짐
        // 아래 함수는 상태를 업데이트 할 때 항상 업데이트 됨
        setEnteredTitle(event.target.value);
        
        // 동시에 많은 state 업데이트를 할 때에 오래되거나 잘못된 스냅샷에 의존할 수 있음
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // state 업데이트가 이전 상태에 의존하고 있다면 아래와 같은 방법 추천
        // setUserInput((prvState) => {
        //     return {...prvState, enteredTitle: event.target.value};
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        // 이벤트가 실행될때 다시 로드되지 않도록하는 내장 메서드 preventDafault
        event.preventDefault();
        //기본 객체 폼을 만들어준다
        // 'title:'과 같은 속성은 마음대로 지어도 되지만 해당 값들은 state의 변수를 사용해얄한다.
        // 여기에 새로 입력된 expense 데이터가 저장된다. 이걸 App.js로 전달해줘야함 (상향식, state끌어올리기?)
        /// 입력된 상태들을 결합
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // 여기부터 양방향 바인딩
        // 밑에 form 안에 각 요소에 value 값에 state를 줘야함
        // onSaveExpenseData 함수는 ExpenseForm 안에서 정의되지 않았어도 props를 통해 NewExpense에서 정의된 함수를
        // 사용할 수 있다 => 부모 컴포넌트와 자식 컴포넌트가 소통하는 방법

        // 매개변수에 expenseData를 전달해주면 NewExpense의 함수의 매개변수로 전달이 된다.
        props.onSaveExpense(expenseData);
        // 초기 상태로 만들기
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
    }



    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    {/* value값을 state로 주게 되면 양방향 바인딩 가능 새로 고침 시에 초기 상태로 돌아감  */}
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;