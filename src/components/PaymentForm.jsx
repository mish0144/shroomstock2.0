// import "./style.css";

import PropTypes from 'prop-types';

function PaymentForm({setPaymentChoice, paymentChoice, setPaymentInfo, setTerms, terms}) {
  console.log(terms)
  return (
    <div>
        <label htmlFor="">Creditcards</label>
        <input key="creditcards" type="radio" id="creditcards" name="payment" onChange={() => setPaymentChoice("creditcards")}></input>

        <label htmlFor="">Mobilepay</label>
        <input key="mobilepay" type="radio" id="mobilepay" name="payment" onChange={() => setPaymentChoice("mobilepay")} ></input>
        {paymentChoice === 'mobilepay' &&

          <div>
          <label htmlFor="phone" key="phone">Phone</label>
          <input type="tel" id="phone" onChange={event => setPaymentInfo("phone", event.target.value)} name="phone" required/>
          <label htmlFor="">Yes,I have read terms and conditions</label>
          <input key="terms" type="checkbox" id="terms1" name="terms" checked={terms} onChange={() => setTerms(!terms)}></input>
          </div>
          }

        {paymentChoice === 'creditcards' && 
          <div>
            <label htmlFor="cartholdername" key="cartholdername">Cartholders  name</label>
            <input type="text" id="cartholdername" onChange={event => setPaymentInfo("cartholdername", event.target.value)} name="cartholdername" required/>
            <label htmlFor="cartnumber" key="cartnumber">Cart number</label>
            <input type="number" min="1000000000000000" max="9999999999999999" id="cartnumber" placeholder="XXXX XXXX XXXX XXXX" onChange={event => setPaymentInfo("cartnumber", event.target.value)} name="cartnumber" required/>
            <label htmlFor="expdate" key="expdate">Exp. Date</label>
            <input type="month" placeholder="MM/YY" id="expdate" onChange={event => setPaymentInfo("expdate", event.target.value)} name="expdate" required/>
            <label htmlFor="cvc" key="cvc">CVC</label>
            <input type="number" id="cvc" min="100" max="999" placeholder="XXX" onChange={event => setPaymentInfo("cvc", event.target.value)} name="cvc" required/>
            <label htmlFor="">Yes,I have read terms and conditions</label>
          <input key="terms" type="checkbox" id="terms2" name="terms" checked={terms} onChange={() => setTerms(!terms)}></input>
          </div>}

    </div>




  );
  }
  
  PaymentForm.propTypes = {
    setPaymentChoice: PropTypes.func,
    paymentChoice: PropTypes.string,
    setPaymentInfo: PropTypes.func,
    setTerms: PropTypes.func,
    terms: PropTypes.bool
  }
  
  export default PaymentForm;
  