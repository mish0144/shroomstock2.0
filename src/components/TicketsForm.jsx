// import "./style.css";

import PropTypes from 'prop-types';

function TypeForm({setVipTickets, setRegularTickets}) {
    console.log(setVipTickets)
    console.log(setRegularTickets)
  return (
    <form className="grid-container">
    <div>
         <label htmlFor="quantityRegular">Regular 799,- pr. ticket</label>
         <input type="number" id="quantityRegular" name="quantityRegular" min="0" max="10" onChange={event => setRegularTickets(parseInt(event.target.value))} required></input>
     </div>
       <div>
            <label htmlFor="quantityVip">VIP 1.299,- pr. ticket</label>
            <input type="number" id="quantityVip" name="quantityVip" min="0" max="10" onChange={event => setVipTickets(parseInt(event.target.value))} required></input>
        </div>
    </form>
  );
}

TypeForm.propTypes = {
    setVipTickets: PropTypes.func,
    setRegularTickets: PropTypes.func
}

export default TypeForm;
