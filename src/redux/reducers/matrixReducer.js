import {
  SudokuCreate,
  duplicateMatrix,
  filterDifficulty,
} from '../../scripts/SudokuAlgorithm';

export const matrixReducer = (
  state = { original: [], filtered: [], played: [] },
  action
) => {
  switch (action.type) {
    case 'matrix/create':
      let matrix = SudokuCreate(9);
      let filtered = filterDifficulty(duplicateMatrix(matrix), action.payload);
      let played = duplicateMatrix(filtered);
      return {
        ...state,
        original: matrix,
        filtered: filtered,
        played: played,
      };

    case 'matrix/update':
      let value = Number(action.payload.value);
      let i = action.payload.i;
      let j = action.payload.j;
      let newMatrix = duplicateMatrix(state.played);
      if (value !== 0) {
        newMatrix[i][j] = value;
      } else {
        newMatrix[i][j] = '';
      }
      return {
        ...state,
        played: newMatrix,
      };

    case 'matrix/reset':
      return {
        ...state,
        played: duplicateMatrix(state.filtered),
      };

    default:
      return state;
  }
};