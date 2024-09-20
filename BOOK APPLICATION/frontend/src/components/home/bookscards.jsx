import React from "react";

import Card from "./card";
const Bookscards = ({ books }) => {
  return (
    <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((items) => {
        return <Card key={books._id} items={items} books={books}></Card>;
      })}
    </div>
  );
};

export default Bookscards;
