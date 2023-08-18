import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import ConsList from "./CostsList";
import CostDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  //
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filtredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostDiagram costs={filtredCosts} />
        <ConsList costs={filtredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
