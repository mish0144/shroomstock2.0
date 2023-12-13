// import "./style.css";

import PropTypes from 'prop-types';

function BillingForm({setBillingInfo}) {

    return (
      <form className="grid-container">
        <label htmlFor="firstname" key="firstname">First Name</label>
        <input type="text" id="firstname" onChange={event => setBillingInfo("firstname", event.target.value)} name="firstname" required/>

        <label htmlFor="lastname" key="lastname">Last Name</label>
        <input type="text" id="lastname" onChange={event => setBillingInfo("lastname", event.target.value)} name="lastname" required/>

        <label htmlFor="address" key="address">Address</label>
        <input type="text" id="address" onChange={event => setBillingInfo("address", event.target.value)} name="address" required/>

        <label htmlFor="zipcode" key="zipcode">Zip Code</label>
        <input type="number" min="1000" max="9999" id="zipcode" onChange={event => setBillingInfo("zipcode", event.target.value)} name="zipcode" required/>

        <label htmlFor="city" key="city">City</label>
        <input type="text" id="city" onChange={event => setBillingInfo("city", event.target.value)} name="city" required/>

        <label htmlFor="email" key="email">Email</label>
        <input type="email" id="email" onChange={event => setBillingInfo("email", event.target.value)} name="email" required/>

        <label htmlFor="repeat" key="repeat">Repeat email</label>
        <input type="email" id="repeat" onChange={event => setBillingInfo("repeat", event.target.value)} name="repeat" required/>

        <label htmlFor="phone" key="phone">Phone</label>
        <input type="tel" id="phone" onChange={event => setBillingInfo("phone", event.target.value)} name="phone" required/>
      
      </form>




    );
    
  }
  
  BillingForm.propTypes = {
    setBillingInfo: PropTypes.func,
  }
  
  export default BillingForm;
  