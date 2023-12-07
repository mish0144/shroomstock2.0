// Importér useEffect og useState fra React samt den tilhørende CSS-fil.
import { useEffect, useState } from "react";
import "../css/program.css";

// Definér din funktionelle komponent "Index".
function Index() {
  // Opret to state-variabler, "data" og "times", ved hjælp af useState-hooket.
  const [data, setData] = useState([]);
  const [times, setTimes] = useState([]);

  // Funktion til at håndtere klik på ugedagsknapper.
  function handleClick(day) {
    // Hent data fra "http://localhost:8080/schedule" via en GET-anmodning.
    fetch("http://localhost:8080/schedule", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (times) {
        // Konverter objektet "times" til et array af værdier.
        times = Object.values(times);
        // Iterér over arrayet og opdater "times"-staten baseret på den valgte dag.
        times.forEach((stage) => {
          setTimes(stage[day]);
        });
      })
      .catch((err) => console.error(err));
  }

  // Funktion til at hente band-data ved komponentens montage.
  function bandsFetch() {
    // Hent data fra "http://localhost:8080/bands" via en GET-anmodning.
    fetch("http://localhost:8080/bands", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (bands) {
        // Opdater "data"-staten med de hentede band-data.
        setData(bands);
      })
      .catch((err) => console.error(err));
  }

  // Anvend useEffect-hooket til at køre "bandsFetch" ved komponentens montage.
  useEffect(() => {
    bandsFetch();
  }, []);

  // Render komponentens indhold.
  return (
    <main>
      {/* Sektion med ugedagsknapper */}
      <section className="buttons">
        <button onClick={() => handleClick("mon")}>Mon</button>
        <button onClick={() => handleClick("tue")}>Tue</button>
        <button onClick={() => handleClick("wed")}>Wed</button>
        <button onClick={() => handleClick("thu")}>Thu</button>
        <button onClick={() => handleClick("fri")}>Fri</button>
        <button onClick={() => handleClick("sat")}>Sat</button>
        <button onClick={() => handleClick("sun")}>Sun</button>
      </section>

      {/* Sektion med band-information */}
      <section className="bands">
        {/* Map over hentede band-data og generér artikler for hvert band */}
        {data.map((band) => (
          // eslint-disable-next-line react/jsx-key (advarsel: husk at tilføje en unik nøgle til hvert element)
          <article>
            {/* Sektion med bandnavn og logo */}
            <section className="band">
              <h2>{band.name}</h2>
              <img src={band.logo.startsWith("https") ? band.logo : "http://localhost:8080/logos/" + band.logo} alt="band image" />
            </section>

            {/* Sektion med tidsinformation */}
            <section className="time">
              <p>10:00</p>
            </section>
          </article>
        ))}
      </section>
    </main>
  );
}

// Eksportér komponenten som standard.
export default Index;
