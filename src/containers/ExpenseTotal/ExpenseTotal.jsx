import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector((store) => store.EXPENSE.income);
  const totalExpenses = expenseList.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);

  const remainingMonney = income - totalExpenses;
  return (
    <div className={`row ${s.container}`}>
      <div className="row">
        <div className={`col ${s.label}`}>Total des dépenses</div>
        <div className={`col ${s.amount}`}>{totalExpenses} €</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Argent restant</div>
        <div className={`col ${s.amount}`}>{remainingMonney} €</div>
      </div>
    </div>
  );
}
