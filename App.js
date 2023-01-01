import React from 'react';
import ReactDOM from 'react-dom/client';

// old way
// const heading = React.createElement(
//   'h1',
//   { id: 'heading', test: 'Shaunak' },
//   'Hello from Shaunak'
// );

// JSX
const heading = (
  <h1 id="title" key="h1">
    Hello from Shaunak
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
