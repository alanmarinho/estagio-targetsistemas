//  int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }

function process() {
  let INDICE = 12,
    SOMA = 0,
    K = 1;
  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  return SOMA;
}

export default process;
