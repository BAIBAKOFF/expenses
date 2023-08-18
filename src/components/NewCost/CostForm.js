import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const [inputAmount, setInputAmount] = useState("");
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const [inputDate, setInputDate] = useState("");
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const costDate = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costDate);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            value={inputAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            value={inputDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="sumbit">Добавить Расход</button>
          <button type="button" onClick={props.onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
