import "../css/style.css";
import "../css/ticketscontent.css";
import TicketsForm from "./TicketsForm";
import PropTypes from 'prop-types'

function TypeStepContent({setVipTickets, setRegularTickets}) {
    console.log(setVipTickets)
    console.log(setRegularTickets)
  return (
    <div>
      <div>
        <h2 className="tickets_content_h2">Choose tickets</h2>
        <TicketsForm setRegularTickets={setRegularTickets} setVipTickets={setVipTickets} />
      </div>
    </div>
  );
}

TypeStepContent.propTypes = {
    setVipTickets: PropTypes.func,
    setRegularTickets: PropTypes.func
}

export default TypeStepContent;
