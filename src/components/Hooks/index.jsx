import React, { useState, useEffect } from 'react';

export default ({ title }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <div>
      <input placeholder="Имя" value={name} onChange={({ target: { value } }) => setName(value)} />
    </div>
  );
};
