// import "./titles.css";
import InfoForm from "./InfoForm";
import PropTypes from 'prop-types'
import "../css/purchase.css";
import "../css/style.css";

function InfoStepContent({participantsTotal, setNameList}) {
  return (
    <div className="grid_purchase">
      <div>
        <h2>Information</h2>
        <p>Type in full name of each participant.</p>
        <InfoForm participantsTotal={participantsTotal} setNameList={setNameList} />
      </div>
    </div>
  );
}

InfoStepContent.propTypes = {
    participantsTotal: PropTypes.number,
    setNameList: PropTypes.func,
}

export default InfoStepContent;
