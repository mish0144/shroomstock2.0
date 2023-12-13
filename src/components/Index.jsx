function Index() {
  return (
    <main>
      <div className="main_con">
        <section className="festival_intro">
          <h2>Shroomstock</h2>
          <h1>Festival</h1>
          <h2>17-23 / June / 2024</h2>
          <p>Transport yourself to the groovy era at our 70s festival, where bell-bottoms sway to the disco beats and flower power vibes rule the day!</p>
          <button>Get your ticket!</button>
          <p>
            See the full program <a href="/program">here</a>
          </p>
        </section>
        <section className="img_section">
          <img src="src/img/festival_img.png" alt="" />
        </section>
      </div>
    </main>
  );
}

export default Index;
