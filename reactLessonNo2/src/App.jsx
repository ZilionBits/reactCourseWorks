import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";
import { ProductList } from "./ProductList";
import { Receptas } from "./Receptas";

function App() {
  const asmenis = [
    {
      Id: 0,
      name: "Antanas",
      surname: "Atanaitis",
      age: 20,
      team: "Studentai",
      image: "https://imgur.com/IOjWm71s.jpg",
    },
    {
      Id: 1,
      name: "Petras",
      surname: "Petraitis",
      age: 22,
      team: "Moksleiviai",
      image: "https://imgur.com/mynHUSas.jpg",
    },
    {
      Id: 2,
      name: "Vilkas",
      surname: "Vilkaitis",
      age: 28,
      team: "Studentai",
      image: "https://imgur.com/bE7W1jis.jpg",
    },
    {
      Id: 3,
      name: "Vilija",
      surname: "Vilimaitė",
      age: 24,
      team: "Moksleiviai",
      image: "https://imgur.com/MK3eW3As.jpg",
    },
    {
      Id: 4,
      name: "Juozas",
      surname: "Juozaitis",
      age: 26,
      team: "Moksleiviai",
      image: "https://imgur.com/lrWQx8ls.jpg",
    },
  ];

  const studentai = asmenis.filter((a) => a.team.includes("Studentai"));
  const moksleiviai = asmenis.filter((a) => a.team.includes("Moksleiviai"));

  const asmenuName = asmenis.map((a) => a.name.length);
  console.log(asmenuName);
  const sum = asmenuName.reduce(function (result, item) {
    return result + item;
  }, 0);
  console.log(sum);

  return (
    <>
      <div>
        <h2>Studentai:</h2>
        {studentai.map((s) => (
          <p key={s.Id}>
            {s.name} <i>{s.surname}</i> {s.age}
          </p>
        ))}
        <h2>Moksleiviai:</h2>
        {moksleiviai.map((m) => (
          <p key={m.Id}>
            {m.name} <i>{m.surname}</i> {m.age}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
