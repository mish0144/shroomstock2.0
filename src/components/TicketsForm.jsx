// import "./style.css";

import PropTypes from 'prop-types';

function TypeForm({setVipTickets, setRegularTickets}) {
    console.log(setVipTickets)
    console.log(setRegularTickets)
  return (
    <div className="grid-container">
    <div>
         <label htmlFor="quantityRegular">Regular: Quantity (between 1 and 5):</label>
         <input type="number" id="quantityRegular" name="quantityRegular" min="1" max="5" onChange={event => setRegularTickets(event.target.value)}></input>
     </div>
       <div>
            <label htmlFor="quantityVip">VIP: Quantity (between 1 and 5):</label>
            <input type="number" id="quantityVip" name="quantityVip" min="1" max="5" onChange={event => setVipTickets(event.target.value)}></input>
        </div>
    </div>
  );
}

TypeForm.propTypes = {
    setVipTickets: PropTypes.func,
    setRegularTickets: PropTypes.func
}

export default TypeForm;
