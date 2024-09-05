import React, { useState } from 'react';

export default function Input({ functionToRun, type }) {
  const [value, setValue] = useState();
  const [result, setResult] = useState();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <input
          style={{ border: 'none', padding: 10, borderRadius: 10, width: '10rem' }}
          type={type}
          placeholder="Digite o valor"
          onChange={(e) => setValue(e.target.value)}
          min={0}
        />
        <button
          style={{ border: 'none', padding: 10, borderRadius: 5, marginLeft: 10 }}
          onClick={() => setResult(functionToRun(value))}
        >
          Testar
        </button>
      </div>
      {!!result && (
        <div style={{ marginTop: 10 }}>
          <p style={{ color: '#63d471' }}>{result}</p>
        </div>
      )}
    </div>
  );
}
