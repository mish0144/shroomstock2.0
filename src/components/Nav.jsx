import "../css/style.css";
import logo from "../img/logo.png";

function Index() {
  return (
    <>
      <nav>
        <img className="nav_logo" src={logo} alt="logo" />
        <h1>MENU</h1>
      </nav>
    </>
  );
}

export default Index;
