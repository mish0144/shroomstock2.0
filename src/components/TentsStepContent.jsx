// import "./titles.css";
import TentsForm from "./TentsForm";
import PropTypes from 'prop-types'

function TentsStepContent({setSmallTents, setBigTents, maxTents}) {
  return (
    <div>
      <div>
        <h2>Tents</h2>
        <p>Save time and let us fix your tent!</p>
        <p>Do you want to join a festival and help save the planet at the same time? Add our Green Camping option that financial compensate.</p>
        <p>299,- pr. 2 person tent</p>
        <p>399,- pr. 3 person tent</p>
        <TentsForm setSmallTents={setSmallTents} setBigTents={setBigTents} maxTents={maxTents} />
      </div>
    </div>
  );
}

TentsStepContent.propTypes = {
    setSmallTents: PropTypes.func,
    setBigTents: PropTypes.func,
    maxTents: PropTypes.number,
}

export default TentsStepContent;
