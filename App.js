import React from 'react';
import ReactDOM from 'react-dom/client';

// old way
// const heading = React.createElement(
//   'h1',
//   { id: 'heading', test: 'Shaunak' },
//   'Hello from Shaunak'
// );

// JSX
const nums = [1, 2, 3];

// const heading = (
//   <div id="container">
//     <h1 id="title" key="h1">
//       Hello from Shaunak
//     </h1>
//     <ul>
//       {nums.map((num) => (
//         <li key={`key-${num}`}>Element {num}</li>
//       ))}
//     </ul>
//   </div>
// );

// Functional component
const Title = () => <h1>This is Title</h1>;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h2 id="sub-title" key="h2">
        Hello from Shaunak
      </h2>
      <ul>
        {nums.map((num) => (
          <li key={`key-${num}`}>Element {num}</li>
        ))}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(<HeadingComponent />);
