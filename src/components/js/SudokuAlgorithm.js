// Matrix(i,j):
//
// (0,0) (0,1) (0,2)  (0,3) (0,4) (0,5)  (0,6) (0,7) (0,8)
// (1,0) (1,1) (1,2)  (1,3) (1,4) (1,5)  (1,6) (1,7) (1,8)
// (2,0) (2,1) (2,2)  (2,3) (2,4) (2,5)  (2,6) (2,7) (2,8)
//
// (3,0) (3,1) (3,2)  (3,3) (3,4) (3,5)  (3,6) (3,7) (3,8)
// (4,0) (4,1) (4,2)  (4,3) (4,4) (4,5)  (4,6) (4,7) (4,8)
// (5,0) (5,1) (5,2)  (5,3) (5,4) (5,5)  (5,6) (5,7) (5,8)
//
// (6,0) (6,1) (6,2)  (6,3) (6,4) (6,5)  (6,6) (6,7) (6,8)
// (7,0) (7,1) (7,2)  (7,3) (7,4) (7,5)  (7,6) (7,7) (7,8)
// (8,0) (8,1) (8,2)  (8,3) (8,4) (8,5)  (8,6) (8,7) (8,8)

// Sudoku data:
const chartSize = 9;

// Sudoku rules:
function checkRow(matrix, num, i, j) {
  for (let loop = 0; loop < chartSize; loop++) {
    if (loop !== j) {
      if (matrix[i][loop] === num) {
        return false;
      }
    }
  }
  return true;
}

function checkColumn(matrix, num, i, j) {
  for (let loop = 0; loop < chartSize; loop++) {
    if (loop !== i) {
      if (matrix[loop][j] === num) {
        return false;
      }
    }
  }
  return true;
}

function checkCube(matrix, num, i, j) {
  let iPlace = () => {
    if (i === 0 || i === 3 || i === 6) {
      return 'first';
    } else if (i === 1 || i === 4 || i === 7) {
      return 'second';
    } else if (i === 2 || i === 5 || i === 8) {
      return 'third';
    }
  };

  let jPlace = () => {
    if (j === 0 || j === 3 || j === 6) {
      return 'first';
    } else if (j === 1 || j === 4 || j === 7) {
      return 'second';
    } else if (j === 2 || j === 5 || j === 8) {
      return 'third';
    }
  };

  let row = iPlace();
  let column = jPlace();

  if (row === 'first' && column === 'first') {
    if (
      (matrix[i][j + 1] ||
        matrix[i][j + 2] ||
        matrix[i + 1][j] ||
        matrix[i + 1][j + 1] ||
        matrix[i + 1][j + 2] ||
        matrix[i + 2][j] ||
        matrix[i + 2][j + 1] ||
        matrix[i + 2][j + 2]) === num
    ) {
      return false;
    } else {
      return true;
    }
  } else if (row === 'first' && column === 'second') {
    if (
      (matrix[i][j - 1] ||
        matrix[i][j + 1] ||
        matrix[i + 1][j] ||
        matrix[i + 1][j + 1] ||
        matrix[i + 1][j + 2] ||
        matrix[i + 2][j] ||
        matrix[i + 2][j + 1] ||
        matrix[i + 2][j + 2]) === num
    ) {
      return false;
    } else {
      return true;
    }
  } else if (row === 'first' && column === 'third') {
    if (
      (matrix[i][j - 2] ||
        matrix[i][j - 1] ||
        matrix[i + 1][j] ||
        matrix[i + 1][j + 1] ||
        matrix[i + 1][j + 2] ||
        matrix[i + 2][j] ||
        matrix[i + 2][j + 1] ||
        matrix[i + 2][j + 2]) === num
    ) {
      return false;
    } else {
      return true;
    }
  } else if (row === 'second' && column === 'first') {
    if (
      (matrix[i - 1][j] ||
        matrix[i - 1][j + 1] ||
        matrix[i - 1][j + 2] ||
        matrix[i][j + 1] ||
        matrix[i][j + 2] ||
        matrix[i + 1][j] ||
        matrix[i + 1][j + 1] ||
        matrix[i + 1][j + 2]) === num
    ) {
      return false;
    } else {
      return true;
    }
  } else if (row === 'second' && column === 'second') {
    if (
      (matrix[i - 1][j] ||
        matrix[i - 1][j + 1] ||
        matrix[i - 1][j + 2] ||
        matrix[i][j - 1] ||
        matrix[i][j + 1] ||
        matrix[i + 1][j] ||
        matrix[i + 1][j + 1] ||
        matrix[i + 1][j + 2]) === num
    ) {
      return false;
    } else {
      return true;
    }
  } else if (row === 'second' && column === 'third') {
    if (
      (matrix[i - 1][j] ||
        matrix[i - 1][j + 1] ||
        matrix[i - 1][j + 2] ||
        matrix[i][j - 2] ||
        matrix[i][j - 1] ||
        matrix[i + 1][j] ||
        matrix[i + 1][j + 1] ||
        matrix[i + 1][j + 2]) === num
    ) {
      return false;
    } else {
      return true;
    }
  } else if (row === 'third' && column === 'first') {
    if (
      (matrix[i - 2][j] ||
        matrix[i - 2][j + 1] ||
        matrix[i - 2][j + 2] ||
        matrix[i - 1][j] ||
        matrix[i - 1][j + 1] ||
        matrix[i - 1][j + 2] ||
        matrix[i][j + 1] ||
        matrix[i][j + 2]) === num
    ) {
      return false;
    } else {
      return true;
    }
  } else if (row === 'third' && column === 'second') {
    if (
      (matrix[i - 2][j] ||
        matrix[i - 2][j + 1] ||
        matrix[i - 2][j + 2] ||
        matrix[i - 1][j] ||
        matrix[i - 1][j + 1] ||
        matrix[i - 1][j + 2] ||
        matrix[i][j - 1] ||
        matrix[i][j + 1]) === num
    ) {
      return false;
    } else {
      return true;
    }
  } else if (row === 'third' && column === 'third') {
    if (
      (matrix[i - 2][j] ||
        matrix[i - 2][j + 1] ||
        matrix[i - 2][j + 2] ||
        matrix[i - 1][j] ||
        matrix[i - 1][j + 1] ||
        matrix[i - 1][j + 2] ||
        matrix[i][j - 2] ||
        matrix[i][j - 1]) === num
    ) {
      return false;
    } else {
      return true;
    }
  }
}

function checkCell(matrix, num, i, j) {
  let row = checkRow(matrix, num, i, j);
  let column = checkColumn(matrix, num, i, j);
  let cube = checkCube(matrix, num, i, j);
  if (row && column && cube) {
    return true;
  } else {
    return false;
  }
}

function checkAllCells(matrix) {
  for (let i = 0; i < chartSize; i++) {
    for (let j = 0; j < chartSize; j++) {
      if (!checkCell(matrix, matrix[i][j], i, j)) {
        return false;
      }
    }
  }
  return true;
}

let tempMatrix = [
  [4, 3, 2, 9, 6, 7, 8, 5, 1],
  [8, 7, 6, 3, 1, 5, 2, 4, 9],
  [1, 9, 5, 8, 2, 4, 7, 3, 6],

  [9, 1, 7, 2, 5, 6, 4, 8, 3],
  [3, 6, 8, 4, 7, 9, 5, 1, 2],
  [2, 5, 4, 1, 3, 8, 9, 6, 7],

  [7, 8, 1, 5, 9, 3, 6, 2, 4],
  [6, 4, 3, 7, 8, 2, 1, 9, 5],
  [5, 2, 9, 6, 4, 1, 3, 7, 8],
];
console.log(checkAllCells(tempMatrix));
