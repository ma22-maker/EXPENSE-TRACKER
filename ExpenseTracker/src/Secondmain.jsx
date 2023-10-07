import React, { useState } from 'react';
import ET from './ET';
import Filter from './Filter';

function Secondmain() {
  const [expenses, setExpenses] = useState([]);
  const Datalist = (opp) => {
    setExpenses([...expenses, opp]);
  };
  return (
    <div>
      <ET TotalData={Datalist} />
      <Filter expenses={expenses}/>
    </div>
  );
}

export default Secondmain;
