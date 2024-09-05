import React from 'react';
import Header from './components/header';
import Instructions from './components/Instruction';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Input from './components/input';

import fibonacci from './logic/exc1_fibonacci';
import A_occurrence from './logic/exc2_A_occurrence';
import process from './logic/exc3_process';

const mapSolutios = {
  0: { response: '9', motivation: 'O próximo da sequência é o valor atual mais 2. next = current + 2' },
  1: { response: '128', motivation: 'O próximo da sequência é valor atua vezes 2. next = current * 2' },
  2: { response: '49', motivation: 'O próximo da sequência é o seu index ao quandrado. next = index ** 2 .' },
  3: {
    response: '100',
    motivation: 'A sequência obedece a lógica do quandrado da sequencia dos números pares. 2², 4², 6², 8², 10²...',
  },
  4: { response: '13', motivation: 'Essa é a Sequência de Fibonacci. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...' },
  5: { response: '200', motivation: 'Todos os nomes dos números começam com a letra D. Essa eu tive que pesquisar...' },
};
function App() {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#464646',
        alignItems: 'center',
      }}
    >
      <Header />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: 1024,
          flexDirection: 'column',
          width: '100%',
          backgroundColor: '#232323',
        }}
      >
        <h1 style={{ fontSize: '2rem', color: '#fff' }}>Técnica</h1>
        <div>
          <Instructions
            text="Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência."
            number={1}
            important="Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;"
            code={'https://github.com/alanmarinho/estagio-targetsistemas/blob/main/src/logic/exc1_fibonacci.js'}
          />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Input functionToRun={fibonacci} type={'number'} />
          </div>
          <Instructions
            text="Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre."
            number={2}
            important={
              'Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;'
            }
            code={'https://github.com/alanmarinho/estagio-targetsistemas/blob/main/src/logic/exc2_A_occurrence.js'}
          />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Input functionToRun={A_occurrence} type={'text'} />
          </div>
          <Instructions
            text="Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);"
            number={3}
            Instructions={'Ao final do processamento, qual será o valor da variável SOMA?'}
            solution={`A variável SOMA terá o valor de ${process()}`}
            code={'https://github.com/alanmarinho/estagio-targetsistemas/blob/main/src/logic/exc3_process.js'}
          />
          <Instructions
            text="Descubra a lógica e complete o próximo elemento:"
            number={4}
            map={[
              'a) 1, 3, 5, 7,',
              'b) 2, 4, 8, 16, 32, 64,',
              'c) 0, 1, 4, 9, 16, 25, 36,',
              'd) 4, 16, 36, 64,',
              'e) 1, 1, 2, 3, 5, 8,',
              'f) 2,10, 12, 16, 17, 18, 19,',
            ]}
            mapSoltion={mapSolutios}
          />

          <Instructions
            text="Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? "
            number={5}
            solution={
              'Ligaria o primeiro interruptor, por um tempo e depois desligaria. Depois ligaria o segundo interruptor e iria até a primeira sala, se a lampara estivesse ligada, é o interruptor 2, se estiver quente é o interruptor 1, se estiver desligada e fria é o interruptor 3. Voltaria para a sala dos interruptores. Ascenderia um interruptor que ainda não tem certeza e iria até a sala 2, se a lâmpada estiver acessa, o interruptor que acabei de ligar é o da sala 2 se estiver apagada é a da 3 e sala que sobrou fica com o interruptor que sobrou.'
            }
          />
        </div>
        <div
          style={{
            borderTop: '2px solid red',
            width: '90%',
            margin: '20px 0',
          }}
        ></div>
        <div
          style={{
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: '1rem' }}>© Alan Marinho</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaGithub size={20} color="#fff" />
            <a style={{ color: '#fff', fontSize: '1rem' }} href="https://github.com/alanmarinho" target="_blank">
              @alanmarinho
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaLinkedin size={20} color="#fff" />
            <a
              style={{ color: '#fff', fontSize: '1rem' }}
              href="https://www.linkedin.com/in/alan-marinho20/"
              target="_blank"
            >
              @alanmarinho020
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdEmail size={20} color="#fff" />
            <a style={{ color: '#fff', fontSize: '1rem' }} href="mailto:alanmarinho020@gmail.com" target="_blank">
              alanmarinho020@gmail.com
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaWhatsapp size={20} color="#fff" />
            <a style={{ color: '#fff', fontSize: '1rem' }} href="https://wa.me/5588982364526" target="_blank">
              (88) 98236-4526
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
