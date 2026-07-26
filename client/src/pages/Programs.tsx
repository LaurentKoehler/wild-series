import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  country: string;
  year: number;
}

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <section>
      <h1>Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <img src={program.poster} alt={program.title} />
            <h2>{program.title}</h2>
            <p>
              {program.country} - ({program.year}){" "}
            </p>
            <p>{program.synopsis}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Programs;
