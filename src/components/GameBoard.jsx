import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeMatrix } from '../redux/actions/changeMatrix';

export default function GameBoard({ matrix, handleFinish }) {
  const dispatch = useDispatch();

  useEffect(() => {
    let trueCounter = 0;
    for (let i = 0; i < matrix.played.length; i++) {
      for (let j = 0; j < matrix.played[i].length; j++) {
        if (matrix.played[i][j] === matrix.original[i][j]) {
          trueCounter++;
        }
      }
    }
    if (trueCounter === Math.pow(9, 2)) {
      handleFinish();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matrix.played]);

  return (
    <div className='sudoku-chart'>
      {matrix.played.map((row, i) => (
        <div className='chart-row' key={i}>
          {row.map((col, j) =>
            col === matrix.original[i][j] ? (
              <input
                className='chart-col computed'
                key={`${i}, ${j}`}
                defaultValue={col}
                readOnly
              />
            ) : col === '' ? (
              <input
                className='chart-col interact'
                key={`${i}, ${j}`}
                value={col}
                onChange={(e) => {
                  dispatch(changeMatrix(e.target.value, i, j));
                }}
                maxLength='1'
              />
            ) : (
              <input
                className='chart-col error'
                key={`${i}, ${j}`}
                value={col}
                onChange={(e) => {
                  dispatch(changeMatrix(e.target.value, i, j));
                }}
                maxLength='1'
              />
            )
          )}
        </div>
      ))}
    </div>
  );
}