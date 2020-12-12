import React from 'react';

function NeverPlayed() {
  return (
    <>
      <p>
        It seems you have never played before... Here's a simple guide to help you choose a difficulty for the first time:
        <br />
        <br />
      </p>
      <table>
        <thead>
          <tr>
            <th />
            <th>hints</th>
            <th>complete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='diff'>Easy:</td>
            <td>3</td>
            <td>75%</td>
          </tr>

          <tr>
            <td className='diff'>Normal:</td>
            <td>2</td>
            <td>50%</td>
          </tr>

          <tr>
            <td className='diff'>Hard:</td>
            <td>1</td>
            <td>25%</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default NeverPlayed;
