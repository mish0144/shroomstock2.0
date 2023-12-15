import insta from "../img/instagram.svg";
import face from "../img/facebook.svg";

function Index() {
  return (
    <section className="footer_box">
      <footer>
        <p>Contact us</p>
        <section className="footer_logos">
          <img src={insta} alt="Instagram logo" />
          <img src={face} alt="Facebook logo" />
        </section>
      </footer>
    </section>
  );
}

export default Index;
