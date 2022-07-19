 import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';



const Expenses = (props) => {
    
    const [filterd, setFilterd] = useState('2020');
    // ExpensesFilter에서 선택한 값을 Expenses 파일로 보내야 하므로 함수 작성
    const filterYearHandler = (selectedYear) => {
        console.log('In Expenses.js')
        setFilterd(selectedYear);
        console.log(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterd} onFilteredChange={filterYearHandler}/>
            {/* map메서드 사용해서 간결하게 나타낼 수 있지 않을까? */}
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