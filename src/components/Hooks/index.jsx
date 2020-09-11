import React, { useState } from 'react';

export default ({ title }) => {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div>Поклацано {count} раз</div>
      <button onClick={() => setCount(count + 1)}>Клац</button>
      <br />
      <br />
      <br />
      <div>Почекано: {checked ? 'Да ' : 'Нет'} <input type="checkbox" id="scales" name="scales" onChange={() => setChecked(!checked) } /></div>
    </div>
  );
};
