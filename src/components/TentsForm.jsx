// import "./style.css";

import PropTypes from 'prop-types';

function TentForm({setSmallTents, setBigTents, maxTents}) {
  return (
    <form className="grid-container">
    <div>
        <label htmlFor="quantitySmallTent">2 person tent</label>
        <input type="number" id="quantitySmallTent" name="quantitySmallTent" min="0" max={maxTents} onChange={event => setSmallTents(parseInt(event.target.value))} required></input>
    </div>
    <div>
        <label htmlFor="quantityBigTent">3 person tent</label>
        <input type="number" id="quantityBigTent" name="quantityBigTent" min="0" max={maxTents} onChange={event => setBigTents(parseInt(event.target.value))} required></input>
    </div>
    </form>
  );
}

TentForm.propTypes = {
    setSmallTents: PropTypes.func,
    setBigTents: PropTypes.func,
    maxTents: PropTypes.number,
}

export default TentForm;
