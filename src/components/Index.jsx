import Nav from "./Nav";
import Footer from "./Footer";
import "../css/index.css";
import "../css/style.css";
function Index() {
  return (
    <div className="main_con">
      <Nav></Nav>
      <main>
        <div className="festival_con">
          <section className="festival_intro">
            <h2>SHROOMSTOCK</h2>
            <h1>FESTIVAL</h1>
            <h3>17-23 / June / 2024</h3>
            <p>Transport yourself to the groovy era at our 70s festival, where bell-bottoms sway to the disco beats and flower power vibes rule the day!</p>
            <button className="ticket_button">Get your ticket!</button>
            <p>
              See the full program <a href="/program">here</a>
            </p>
          </section>
          <section className="img_section">
            <img src="src/img/festival_2.png" alt="" />
          </section>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Index;
