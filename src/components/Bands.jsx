import { useEffect, useState } from "react";
import "../css/bands.css";
import blueScene from "../img/blue_flower.svg";
import pinkScene from "../img/pink_flower.svg";
import yellowScene from "../img/yellow_flower.svg";
import spotifyImg from "../img/spotify.svg";
import Button from "./Favouritebutton";
import { Link } from "react-router-dom";

function Bands() {
  // Definerer Bands komponenten
  const [data, setData] = useState([]); // Opretter state variabler ved hjælp af useState hook
  const [times, setTimes] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [favourites, setFavourites] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("favourites")); // Henter favoritter fra local storage
    return saved || [];
  });
  const [isFavClicked, setIsFavClicked] = useState(false);

  function handleClick(day) {
    // Funktion til at håndtere klik på dag-knapper
    setIsFavClicked(false);
    setTimes([]);
    setIsClicked(true);

    fetch("https://shroomstockfestival.glitch.me/schedule", {
      // Henter data fra API
      method: "GET",
    })
      .then(function (response) {
        return response.json(); // Konverterer respons til JSON
      })
      .then(function (schedule) {
        schedule = Object.values(schedule);

        schedule.forEach((stage, index) => {
          const timesWithScene = stage[day].map((timeSlot) => ({ ...timeSlot, scene: index }));
          // Tilføjer scene info til hver tids-slot
          setTimes((prevTimes) => [...prevTimes, ...timesWithScene]); // Opdaterer times state variabel
        });
      })
      .catch((err) => console.error(err)); // Logger eventuelle fejl
  }

  function bandsFetch() {
    // Funktion til at hente bands data
    fetch("https://shroomstockfestival.glitch.me/bands", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (bands) {
        // Opdaterer data state variabel med bands data
        setData(bands);
      })
      .catch((err) => console.error(err));
  }
  function imageBand(band) {
    // Funktion til at finde et bands logo
    const foundBand = data.find((obj) => obj.name === band);

    if (foundBand) {
      return foundBand.logo;
    } else {
      return "";
    }
  }

  function handleFavourite({ id, html }) {
    // Funktion til at håndtere favoritter
    const favouriteExists = favourites.some((favourite) => favourite.id === id);

    if (favouriteExists) {
      const filteredFavourites = favourites.filter((favourite) => favourite.id !== id);
      // Fjerner favorit, hvis den allerede eksisterer
      setFavourites(filteredFavourites);
    } else {
      setFavourites((prevFavourites) => [...prevFavourites, { id, html }]);
      // Tilføjer favorit, hvis den ikke allerede eksisterer
    }
  }

  function showFavourite() {
    // Funktion til at vise favoritter
    return favourites.map((favourite, index) => {
      return (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: favourite.html }} />
        </div>
      );
    });
  }

  useEffect(() => {
    // Bruger useEffect hook til at hente bands data ved komponentens mount
    bandsFetch();
    bandsFetch();
  }, []);

  useEffect(() => {
    // Bruger useEffect hook til at opdatere local storage når favourites state variabel ændres
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    // Returnerer JSX for Bands komponenten
    <main>
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
            setIsFavClicked(!isFavClicked); // Skifter tilstanden for favoritvisning
          }}
        >
          Favourites
        </button>
      </section>

      <section className="bands">
        {isFavClicked
          ? showFavourite() // Viser favoritter, hvis isFavClicked er sand
          : isClicked
          ? times.map((time, index) => {
              // Mapper over tider, hvis isClicked er sand
              let imgString = imageBand(time.act); // Finder bandlogoet
              let sceneImgSrc;
              if (time.scene === 0) {
                sceneImgSrc = pinkScene; // Vælger scenen baseret på sceneindekset
              } else if (time.scene === 1) {
                sceneImgSrc = yellowScene;
              } else if (time.scene === 2) {
                sceneImgSrc = blueScene;
              }
              imgString = imgString.startsWith("https") ? imgString : "https://shroomstockfestival.glitch.me/logos/" + imgString; // Kontrollerer, om billedstien er fuld eller relativ
              if (time.act === "break") {
                return; // Returnerer intet, hvis det er en break
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
          : // Hvis isClicked er falsk, vises alle bands i stedet
            data.map((band, index) => (
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

export default Bands;
