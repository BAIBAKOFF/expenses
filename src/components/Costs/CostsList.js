import "./CostsList.css";
import CostItem from "./CostItem";

const ConsList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">There are no expenses this year</h2>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default ConsList;
