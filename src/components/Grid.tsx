import React from 'react';

function Grid(props: any) {
  const data = props.data;
  const keys = Object.keys(props.data[0] || {});
  const onClick = (e: any) => {
    props.setSelected(props.data[e.target.id]);
  };

  return (
    <div className="Grid">
      <table>
        <thead>
          <tr>
            {keys.slice(0,5).map((k, i) => (
              <th key={i}>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d: any, i: number) => (
            <tr key={i} onClick={onClick}>
            {Object.values(d).slice(0,5).map((v: any, j: number) => (
              <td id={""+i} key={`${i}${j}`}>{typeof v === 'object' ? JSON.stringify(v) : v}</td>
            ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
