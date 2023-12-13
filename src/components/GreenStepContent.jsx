// import "./titles.css";
import GreenForm from "./GreenForm";
import PropTypes from 'prop-types'

function GreenStepContent({setGreen, green}) {
  return (
    <div>
      <div>
        <h2>Green Camping</h2>
        <p>Camping spot in certified green area.</p>
        <p>Do you want to join a festival and help save the planet at the same time? Add our Green Camping option that financial compensate.</p>
        <p>249,- pr. ticket</p>
        <GreenForm setGreen={setGreen} green={green}/>
      </div>
    </div>
  );
}

GreenStepContent.propTypes = {
    setGreen: PropTypes.func,
    green: PropTypes.bool,
}

export default GreenStepContent;
