import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>
  //<card className='expenses'> or <card className='expenseItem'> to be inserted between the tags via props.children
}

export default Card;