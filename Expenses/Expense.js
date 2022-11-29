import React,{ useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expense=(props) =>{
        const [filteredYear, setFilteredYear] = useState('2020');

        const filterChangeHandler = selectedYear => {
          setFilteredYear(selectedYear);
        };
        
    return (
    <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense)=>
                <ExpenseItem
                 title={expense.title}
                amount={expense.amount}
                date={expense.date}
               locationOfExpenditure={expense.locationOfExpenditure}
       />

)}

          
        </Card>
        </div>
      
    
   
  );
}

export default Expense;
