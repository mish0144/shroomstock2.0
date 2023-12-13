// import "./style.css";

import PropTypes from 'prop-types';

function GreenForm({setGreen, green}) {

  return (
    <form className="grid-container">
       <div>
            <label htmlFor="greenCompingChoice">Yes please!</label>
            <input type="checkbox" id="greenCompingChoice" name="greenCompingChoice" checked={green} onChange={() => setGreen(!green)}></input>
        </div>
    </form>

  );
  
}

GreenForm.propTypes = {
    setGreen: PropTypes.func,
    green: PropTypes.bool,
}

export default GreenForm;
