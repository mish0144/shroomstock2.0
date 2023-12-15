import "../css/purchase.css";
import "../css/style.css";
import "../css/tickets.css";
import PropTypes from 'prop-types';

function TypeForm({setVipTickets, setRegularTickets}) {
    console.log(setVipTickets)
    console.log(setRegularTickets)
  return (
    <form className="grid_tickets">
    <div className="tickets_regular">
         <label htmlFor="quantityRegular"><h3>Regular</h3> <h4>799,-</h4> <p>pr. ticket</p></label>
         <input type="number" id="quantityRegular" name="quantityRegular" min="0" max="10" onChange={event => setRegularTickets(parseInt(event.target.value))} required></input>
     </div>
       <div className="tickets_vip">
            <label htmlFor="quantityVip"><h3>VIP</h3> <h4>1.299,-</h4> <p>pr. ticket</p></label>
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
