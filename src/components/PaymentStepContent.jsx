// import "./titles.css";
import BillingForm from "./BillingForm";
import PaymentForm from "./PaymentForm";
import PropTypes from 'prop-types'

function InfoStepContent({setBillingInfo, setPaymentInfo, setPaymentChoice, paymentChoice, setTerms, terms}) {
  return (
    <div>
      <div>
        <h2>Billing information</h2>
        <p>Type in billing information</p>
        <BillingForm setBillingInfo={setBillingInfo} />
        <h2>Payment</h2>
        <p>Choose payment method</p>
        <PaymentForm setPaymentInfo={setPaymentInfo} setPaymentChoice={setPaymentChoice} paymentChoice={paymentChoice} setTerms={setTerms} terms={terms}/>
      </div>
    </div>
  );
}

InfoStepContent.propTypes = {
    setBillingInfo: PropTypes.func,
    setPaymentInfo: PropTypes.func,
    setPaymentChoice: PropTypes.func,
    paymentChoice: PropTypes.string,
    setTerms: PropTypes.func,
    terms: PropTypes.bool
}

export default InfoStepContent;
