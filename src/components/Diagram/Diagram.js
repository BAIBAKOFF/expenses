import "./Diagram.css";
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {
  const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value);
  console.log(dataSetsValues);

  const maxMonthCosts = Math.max(...dataSetsValues);
  return (
    <div className="diagram">
      {props.dataSets.map((dataSets) => (
        <DiagramBar
          key={dataSets.label}
          value={dataSets.value}
          maxValue={maxMonthCosts}
          label={dataSets.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
