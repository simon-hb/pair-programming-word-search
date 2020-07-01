const transpose = function(matrix) {
  let output = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    output.push([]);
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      output[j].push(matrix[i][j]);
    }
  }
  return output;
};


const reverse = function(matrix) {
  let output = matrix;
  
  for (let i = 0; i < output.length; i++) {
    output[i].reverse();
  }
  return output;
};




const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  
  let verticalLetters = letters;
  let reverseLetters = letters;
  let verticalReverseLetters = letters;

  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(verticalLetters).map(ls => ls.join(''));
  const reverseJoin = reverse(reverseLetters).map(ls => ls.join(''));
  const verticalReverseJoin = reverse((transpose(verticalReverseLetters))).map(ls => ls.join(''));
  
  for (const l of verticalReverseJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of reverseJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;