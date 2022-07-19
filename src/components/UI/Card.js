import './Card.css';
// 이 컴포넌트는 Expenses, ExpenseItem에서 중복되는 div태그를 Card라는 컴포넌트로 
// 따로 분리해 만든것이다. 이를 통해 같은 공통의 클래스네임 + 각각의 클래스네임을 설정할 수 있다.
const Card = (props) => {
    // card는 디폴트 클래스, 뒤에 공백을 포함해야 함
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>
}
// props.children은 예약어. 따로 지정해주지 않아도 언제나 사용자 지정 컴포넌트에 있음
// props.children는 열고 닫는 태그 사이에 있는 컴포넌트들을 말한다. -> composition특성

export default Card;  