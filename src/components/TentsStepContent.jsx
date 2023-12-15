import "../css/purchase.css";
import "../css/style.css";
import TentsForm from "./TentsForm";
import PropTypes from 'prop-types'

function TentsStepContent({setSmallTents, setBigTents, maxTents}) {
  return (
    <div className="grid_purchase">
      <div>
        <h2>Tents</h2>
        <h5>Let us fix your tent!</h5>
        <p>Do you want to join a festival and help save the planet at the same time? Add our Green Camping option that financial compensate.</p>
        <h6>299,- pr. 2 person tent</h6>
        <h6>399,- pr. 3 person tent</h6>
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
