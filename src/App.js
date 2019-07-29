import React, { useState } from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

import SearchParams from './SearchParams';
const App = () => {
  // return React.createElement(
  //   'div',
  //   {
  //     id: 'something-important'
  //   },
  //   [
  //     React.createElement('h1', {}, 'Adopt me!'),
  //     React.createElement(Pet, {
  //       name: 'Luna',
  //       animal: 'Dog',
  //       bred: 'Havanese'
  //     }),
  //     React.createElement(Pet, {
  //       name: 'Pepper',
  //       animal: 'Bird',
  //       bred: 'HavaneCockatielse'
  //     }),
  //     React.createElement(Pet, {
  //       name: 'Doink',
  //       animal: 'Cat',
  //       bred: 'Mixed'
  //     })
  //   ]
  // );
  return (
    <div>
      <h1 id="somenthing-important"> Adopt ME! </h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="HavaneCockatielse" /> */}
    </div>
  );
};

render(<App />, document.getElementById('root'));
