import React, { useEffect } from 'react';
import resources from '../data/resources.json';

function Select(props: any) {
  const options = resources;

  useEffect(() => {
      props.search(options[0]);
  }, []);

  const onSelect = (e: any) => {
    props.search(e.target.value);
  };

  return (
    <div className="Select">
      <select onChange={onSelect}>
        {options.map((o, i) => (
          <option key={i}>{o}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
