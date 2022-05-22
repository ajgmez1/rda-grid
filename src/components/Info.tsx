import React from 'react';

function Info(props: any) {
  const rec = props.selected || {};
  return (
    <div className="Info"> 
      {"{"}
      {Object.entries(rec).map(([k,v]) => (
        <p>
          {`${k}:${typeof v === 'object' ? JSON.stringify(v) : v}`}
        </p>
      ))}
      {"}"}
    </div>
  );
}

export default Info;
