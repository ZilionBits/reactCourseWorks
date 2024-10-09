import Students from "../data/Students";
import { useState } from "react";

export const Student = () => {
  const [team, setTeam] = useState([]);

  const addMember = (s) => {
    console.log(s.name);
    setTeam([...team, s])
  };

  return (
    <div>
      {Students.map((s) => (
        <button onClick={() => addMember(s)}>Add {s.name}</button>
      ))}
      <div>Mano komanda</div>

      <ul>
        {team.map((t) => (
          <li>
            {t.name}:{t.age}
          </li>
        ))}
      </ul>
    </div>
  );
};
