import { CiWarning } from 'react-icons/ci';
import { FaCode } from 'react-icons/fa';

export default function Instructions({ text, number, important, instruction, map, mapSoltion, solution, code }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
      <div style={{ display: 'flex' }}>
        <div>
          <h2 style={{ color: '#fff', fontSize: '2rem', marginRight: 30 }}>{number}</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <h2 style={{ color: '#fff', fontSize: '1rem' }}>{text}</h2>
          </div>
          {instruction && (
            <div style={{ marginTop: 10 }}>
              <h2 style={{ color: '#fff', fontSize: '1rem' }}>{instruction}</h2>
            </div>
          )}
          {map && (
            <div style={{ marginTop: 10 }}>
              {map.map((item, index) => (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <h2 key={index} style={{ color: '#fff', fontSize: '1rem' }}>
                    {item}
                  </h2>
                  <div style={{ padding: 5, backgroundColor: '#f5edf0', borderRadius: 5, marginLeft: 3 }}>
                    <h2 style={{ color: '#000', fontSize: '1rem' }}>{mapSoltion[index].response}</h2>
                  </div>
                  <h2 style={{ fontSize: '1rem', marginLeft: 10, color: '#63d471' }}>{mapSoltion[index].motivation}</h2>
                </div>
              ))}
            </div>
          )}
        </div>
        {code && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 10 }}>
            <a href={code} target="_blank">
              <FaCode size={25} color="#63d471" />
            </a>
          </div>
        )}
      </div>
      {important && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            backgroundColor: '#ffc857',
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <CiWarning size={20} color="red" />
          <h2 style={{ color: 'red', fontSize: '1rem', marginLeft: 10 }}>{important}</h2>
        </div>
      )}
      {solution && (
        <div style={{ backgroundColor: '#70a9a1', borderRadius: 5, padding: 15, marginTop: 10 }}>
          <h2 style={{ color: '#fff', fontSize: '1rem', marginTop: 10 }}>
            <strong>Solução:</strong> {solution}
          </h2>
        </div>
      )}
    </div>
  );
}
