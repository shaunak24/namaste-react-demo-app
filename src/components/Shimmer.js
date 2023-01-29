import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap p-5 my-5">
      {Array(15)
        .fill('')
        .map((e, index) => (
          <div
            key={index}
            className="w-56 h-56 m-2 p-2 shadow-lg bg-cyan-200"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
