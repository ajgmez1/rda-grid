import React from 'react';

function Info(props: any) {
  const rec = props.selected || {};
  return (
    <div className="Info">
      {JSON.stringify(rec)}
    </div>
  );
}

export default Info;
