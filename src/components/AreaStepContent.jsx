// import "./titles.css";
import AreaForm from "./AreaForm";
import PropTypes from 'prop-types'

function AreaStepContent({setArea, ticketsWanted}) {
    console.log(setArea)
  return (
    <div>
      <div>
        <h2>Choose area</h2>
        <AreaForm setArea={setArea} ticketsWanted={ticketsWanted}/>
      </div>
    </div>
  );
}

AreaStepContent.propTypes = {
    setArea: PropTypes.func,
    ticketsWanted: PropTypes.number,
}

export default AreaStepContent;
