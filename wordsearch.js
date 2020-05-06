// array of arrays into array
// 

// TRANSPOSE FUNCTION

const transpose = function(matrix) {
    let length = matrix.length;
    //var h = matrix[0];
    let tempMatrix = [];
    if (length === 1) {
      for (let element of matrix[0]) {
        let temptempMatrix = [];
        temptempMatrix.push(element);
        tempMatrix.push(temptempMatrix);
      }
    }
  
    for (let i = 0; i < length; i++) {
      tempMatrix[i] = [];
      for (let j = 0; j < length; j ++) {
        tempMatrix[i][j] = matrix[j][i];
      }
    }
    return tempMatrix;
  };

// WORDSEARCH FUNCTION

// const arraySearch = transpose;

// (ls => ls.join(' '))

const wordSearch = function(letters, word) { 
    const horizontalJoin = letters.map(ls => ls.join(""));
    console.log(horizontalJoin);
    for (let l of horizontalJoin) {
        if (l.includes(word)) {  
            return true;
        }
        const verticalJoin = transpose(letters).map(ls => ls.join(""));
        for (let l of verticalJoin) {
            if (l.includes(word)) {
                return true;
                }
            }
        } 
        return false;
    };

    wordSearch([
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ], 'SEINFELD')

//const result = wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK')

// const 

// console.log(wordSearch(transpose, result));


module.exports = wordSearch;