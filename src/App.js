import React, { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <section className="container">
      <h3>${people.length} birthdays today</h3>
      <article className="person">
        {people.map((person) => {
          return <List {...person} key={person.id}/>;
        })}
      </article>
      <button onClick={()=> setPeople([])}>clear all</button>
    </section>
  );
};

export default App;
