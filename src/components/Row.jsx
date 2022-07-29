import React from "react";

const Row = ({ title, fetchUrl }) => {
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
    </>
  );
};

export default Row;
