import TentsForm from "./TentsForm";
import Basket from "./Basket";
import PropTypes from 'prop-types'
import "../css/purchase.css";
import "../css/tents.css";
import "../css/style.css";

function TentsStepContent({basketInfo, ...tentInfo}) {
  return (
    <div className="grid_purchase">
      <div className="tents_left">
        <h2>Tents</h2>
        <h6>Let us fix your tent!</h6>
        <p className="tents_p">Do you want to join a festival and help save the planet at the same time? Add our Green Camping option that financial compensate.</p>
        <h5 className="tents_h5">299,- pr. 2 person tent</h5>
        <h5 className="tents_h5">399,- pr. 3 person tent</h5>
        <TentsForm {...tentInfo} />
      </div>
      <Basket basketInfo={basketInfo}/>
    </div>
  );
}

TentsStepContent.propTypes = {
    setSmallTents: PropTypes.func,
    setBigTents: PropTypes.func,
    maxTents: PropTypes.number,
    basketInfo: PropTypes.object,
    smallTentCount: PropTypes.number,
    bigTentCount: PropTypes.number,
}

export default TentsStepContent;
