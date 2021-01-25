import React from "react";

const List = ({ image, name, age }) => {
  return (
    <>
      <img src={image} alt="pic" />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </>
  );
};

export default List;
