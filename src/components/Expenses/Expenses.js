import { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
	const items = props.items
	const [filteredYear, setFilteredYear] = useState('2021')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	return (

		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>	
				{props.items.map(expense =>
					<ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} />
				)}
			</Card>
		</div>
	)
}
export default Expenses