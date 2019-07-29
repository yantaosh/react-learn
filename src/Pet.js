import React from 'react';
export default function Pet({ name, animal, breed }) {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, name),
  //   React.createElement('h2', {}, animal),
  //   React.createElement('h2', {}, bred)
  // ]);
  const x = name.toUpperCase();
  return (
    <div>
      <h1> {x} </h1>
      <h2> {animal} </h2>
      <h2> {breed} </h2>
    </div>
  );
}
