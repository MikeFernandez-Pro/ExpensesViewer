import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'


const ExpenseItem = (props) => {
	
	// useState permet de rafraichir l'affichage d'une variable donnée en param
	// Il retourne une array deux élement (la variable et une fonction setter)
	// On peeut ensuite appeler ce setter pour modifier la variable à laquelle il est lié
	// const [title, setTitle] = useState(props.title);

	// const clickHandler = () => {
	// 	setTitle('Pain de mie')
	// }
	// <button onClick={clickHandler}>Change Title</button>

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.amount}€</div>
			</div>
		</Card>
	)
}

export default ExpenseItem