// Importér useEffect og useState fra React samt den tilhørende CSS-fil.
import { useEffect, useState } from "react";
import "../css/bands.css";
import blueScene from "../img/blue_flower.svg";
import pinkScene from "../img/pink_flower.svg";
import yellowScene from "../img/yellow_flower.svg";
import spotifyImg from "../img/spotify.svg";
import Button from "./Favouritebutton";
import { Link } from "react-router-dom";

// Definér din funktionelle komponent "Index".
function Bands() {
  // Opret to state-variabler, "data" og "times", ved hjælp af useState-hooket.
  const [data, setData] = useState([]);
  const [times, setTimes] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [favourites, setFavourites] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("favourites"));
    return saved || [];
  });
  const [isFavClicked, setIsFavClicked] = useState(false);

  // Funktion til at håndtere klik på ugedagsknapper.
  function handleClick(day) {
    setIsFavClicked(false);
    setTimes([]);
    setIsClicked(true);
    // Hent data fra "http://localhost:8080/schedule" via en GET-anmodning.
    fetch("https://shroomstockfestival.glitch.me/schedule", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (schedule) {
        // Konverter objektet "times" til et array af værdier.
        schedule = Object.values(schedule);
        // Iterér over arrayet og opdater "times"-staten baseret på den valgte dag.
        schedule.forEach((stage, index) => {
          const timesWithScene = stage[day].map((timeSlot) => ({ ...timeSlot, scene: index }));
          setTimes((prevTimes) => [...prevTimes, ...timesWithScene]);
        });
      })
      .catch((err) => console.error(err));
  }
  // Funktion til at hente band-data ved komponentens montage.
  function bandsFetch() {
    // Hent data fra "http://localhost:8080/bands" via en GET-anmodning.
    fetch("https://shroomstockfestival.glitch.me/bands", {
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
  function imageBand(band) {
    const foundBand = data.find((obj) => obj.name === band);

    if (foundBand) {
      return foundBand.logo;
    } else {
      return "";
    }
  }

  function handleFavourite({ id, html }) {
    const favouriteExists = favourites.some((favourite) => favourite.id === id);

    if (favouriteExists) {
      const filteredFavourites = favourites.filter((favourite) => favourite.id !== id);
      setFavourites(filteredFavourites);
    } else {
      setFavourites((prevFavourites) => [...prevFavourites, { id, html }]);
    }
  }

  function showFavourite() {
    return favourites.map((favourite, index) => {
      return (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: favourite.html }} />
        </div>
      );
    });
  }

  // Anvend useEffect-hooket til at køre "bandsFetch" ved komponentens montage.
  useEffect(() => {
    bandsFetch();
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Render komponentens indhold.
  return (
    <main>
      {/* Sektion med ugedagsknapper */}
      <section className="buttons">
        <button onClick={() => setIsClicked(false)}>All Bands</button>
        <button onClick={() => handleClick("mon")}>Mon</button>
        <button onClick={() => handleClick("tue")}>Tue</button>
        <button onClick={() => handleClick("wed")}>Wed</button>
        <button onClick={() => handleClick("thu")}>Thu</button>
        <button onClick={() => handleClick("fri")}>Fri</button>
        <button onClick={() => handleClick("sat")}>Sat</button>
        <button onClick={() => handleClick("sun")}>Sun</button>
        <button
          onClick={() => {
            setIsFavClicked(!isFavClicked);
          }}
        >
          Favourites
        </button>
      </section>

      {/* Sektion med band-information */}
      <section className="bands">
        {/* Map over hentede band-data og generér artikler for hvert band */}
        {isFavClicked
          ? showFavourite()
          : isClicked
          ? times.map((time, index) => {
              let imgString = imageBand(time.act);
              let sceneImgSrc;
              if (time.scene === 0) {
                sceneImgSrc = pinkScene;
              } else if (time.scene === 1) {
                sceneImgSrc = yellowScene;
              } else if (time.scene === 2) {
                sceneImgSrc = blueScene;
              }
              imgString = imgString.startsWith("https") ? imgString : "https://shroomstockfestival.glitch.me/logos/" + imgString;
              if (time.act === "break") {
                return;
              } else {
                return (
                  <article key={index}>
                    <section className="band">
                      <img className="scene_img" src={sceneImgSrc} alt="scenes" />
                      <h2>{time.act}</h2>
                      <img className="band_img" src={imgString} alt="band image" />
                    </section>
                    <section className="time">
                      <p>{time.start + "-" + time.end}</p>
                      <div>
                        <a className="spotifylink" target="_blank" href="https://open.spotify.com/" rel="noreferrer">
                          <img src={spotifyImg} alt="spotify logo" />
                        </a>

                        <Button onFavouriteClick={handleFavourite} id={index}></Button>
                      </div>
                    </section>
                  </article>
                );
              }
            })
          : data.map((band, index) => (
              <article key={index}>
                <section className="band">
                  <h2>{band.name}</h2>
                  <img className="band_img" src={band.logo.startsWith("https") ? band.logo : "https://shroomstockfestival.glitch.me/logos/" + band.logo} alt="band image" />
                </section>
              </article>
            ))}
      </section>
    </main>
  );
}

// Eksportér komponenten som standard.
export default Bands;
