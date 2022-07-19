import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', { month: '2-digit' });
    // toLocaleString을 사용해 인간이 읽을 수 있는 형태로 날짜 출력

    return (
        <div className='expense-date'>
          <div className='expense-date__month'>{month}</div>
          <div className='expense-date__year'>{year}</div>
          <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;