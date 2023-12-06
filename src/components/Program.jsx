import { useEffect, useState } from "react";
import "../css/program.css";

function Index() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/bands", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (bands) {
        console.log(bands);
        setData(bands);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <section className="buttons">
        <button>Mon</button>
        <button>Tue</button>
        <button>Wed</button>
        <button>Thu</button>
        <button>Fri</button>
        <button>Sat</button>
        <button>Sun</button>
      </section>
      <section className="bands">
        {data.map((band) => (
          <p>{band.name}</p>
        ))}
      </section>
    </>
  );
}

export default Index;
