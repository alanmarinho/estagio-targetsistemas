import React from 'react';
import Logo from './logo';

export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        justifyContent: 'space-around',
        padding: 10,
        minWidth: '100%',
      }}
    >
      <a href="https://www.targetsistemas.com.br" target="_blank" style={{ textDecoration: 'none', color: '#000' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Logo />
          <div style={{ marginLeft: 5 }}>
            <h4 style={{ fontSize: '1rem' }}>Target Sistemas</h4>
            <h6 style={{ fontSize: '.8rem' }}>Avaliador</h6>
          </div>
        </div>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '1rem' }}>Estágio - Ribeirão Preto</h2>
      </div>
      <a href="https://github.com/alanmarinho" target="_blank" style={{ textDecoration: 'none', color: '#000' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ marginRight: 5 }}>
            <h4 style={{ fontSize: '1rem' }}>Alan Marinho</h4>
            <h6 style={{ textAlign: 'end', fontSize: '0.8rem' }}>Candidato</h6>
          </div>
          <img style={{ width: '3rem', borderRadius: '100%' }} src="https://github.com/alanmarinho.png" alt="alan" />
        </div>
      </a>
    </div>
  );
}
