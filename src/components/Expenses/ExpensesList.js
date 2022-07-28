import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expense.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem 
                // Warning: Each child in a list should have a unique "key" prop.
                // 위와 같은 오류메시지: 특정 컨텐츠를 갖는 모든 아이템들은 분명하게 고유한 id를 갖고 있어야 함 -> key속성 적어주기
                // 더미데이터에서 고유한 id 사용
                // 아이템이 위치해야할 곳 까지 인식함
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
            ))}
        </ul>
    )
}

export default ExpensesList;