import React,{useState} from "react";

export const AddTransaction = () => {
   
  return (
    <>
      <h3>Add new Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter Text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative-expense,positive-income)
          </label>
          <input type="number" placeholder="Enter amount..."/>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
