import Bands from "./Bands";
import Nav from "./Nav";
import "../css/program.css";
import "../css/style.css";
import blueScene from "../img/blue_flower.svg";
import pinkScene from "../img/pink_flower.svg";
import yellowScene from "../img/yellow_flower.svg";
function Index() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <h1 className="program_h1">Program</h1>
        <section className="scene_colors">
          <div className="tooltip">
            <span className="tooltiptext">Each color represents a scene. Check for scene color in the band photos top left corner.</span>
            <img className="scene_color" src={pinkScene} alt="scene colors" />
          </div>
          <img className="scene_color" src={yellowScene} alt="scene colors" />
          <img className="scene_color" src={blueScene} alt="scene colors" />
        </section>
        <section className="scenes">
          <h1>Pink Scene</h1>
          <h1>Yellow Scene</h1>
          <h1>Blue Scene</h1>
        </section>
        <Bands></Bands>
      </main>
    </div>
  );
}

export default Index;
