import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import Newcost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Fridge",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 1254.72,
  },
  {
    id: "c3",
    date: new Date(2021, 3, 1),
    description: "Jeans",
    amount: 49.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    //Обновления состояние.
    //Берем прошлые данные prevCosts и добавляем к новым
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <Newcost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
