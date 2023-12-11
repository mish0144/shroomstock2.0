// import "./titles.css";
import TicketsForm from "./TicketsForm";
import PropTypes from 'prop-types'

function TypeStepContent({setVipTickets, setRegularTickets}) {
    console.log(setVipTickets)
    console.log(setRegularTickets)
  return (
    <div>
      <div>
        <p>Choose tickets</p>
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
