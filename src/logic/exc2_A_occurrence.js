function A_occurrence(text) {
  let cont = 0;
  console.log('ssdsdsd', text);

  for (let i = 0; i < text.length; i++) {
    if (text[i] === 'a' || text[i] === 'A') {
      cont++;
    }
  }
  if (cont > 0) {
    return `A letra 'a' apareceu ${cont} vezes`;
  } else {
    return 'A letra "a" não apareceu';
  }
}

export default A_occurrence;
