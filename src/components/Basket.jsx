import "../css/style.css";
import "../css/basket.css";
import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from "react";

function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

function Basket({basketInfo: {selectedArea, regularTicketCount,vipTicketCount, smallTentCount, bigTentCount, selectedGreenOption, reservationEndsAt}}) {  
  let total = 99 + regularTicketCount * 799 + vipTicketCount * 1299 + smallTentCount * 299 + bigTentCount * 399

  if (selectedGreenOption){
    total = total + (vipTicketCount + regularTicketCount) * 249
  }

  const calculateTimeRemaining = useCallback(() => {
    const now = new Date();
    const difference = reservationEndsAt - now;

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return {
      minutes,
      remainingSeconds,
    };
  }, [reservationEndsAt]);

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);


    return () => clearInterval(timerInterval);
  }, [calculateTimeRemaining]);
    
  return ( 
      <div className="basket">
        <h3 style={{textTransform: 'uppercase'}}>Your basket</h3>
          <div className="basket_list"> {
            isNaN(timeRemaining.minutes) || isNaN(timeRemaining.remainingSeconds)
            ? ''
            : <p className="countdown">Tickets reserved for: {padZero(timeRemaining.minutes) }:{padZero(timeRemaining.remainingSeconds)}</p>
          }
            
            {regularTicketCount > 0 && <div className="item_in_basket"><h6 className="item">Regular tickets in {selectedArea}</h6> <div className="price_in_basket_list"><p>{regularTicketCount} x 799,-</p><p>{regularTicketCount * 799},-</p></div></div>
            }
            
            {vipTicketCount > 0 && <div className="item_in_basket"><h6 className="item">VIP tickets in {selectedArea}</h6> <div className="price_in_basket_list"><p>{vipTicketCount} x 1299,-</p><p>{vipTicketCount * 1299},-</p></div></div>
            }

            {selectedGreenOption && <div className="item_in_basket"><h6 className="item">Green Camping</h6> <div className="price_in_basket_list"><p>{vipTicketCount + regularTicketCount} x 249,-</p><p>{(vipTicketCount + regularTicketCount) * 249},-</p></div></div>
            }

            {smallTentCount > 0 && <div className="item_in_basket"><h6 className="item">Small tents</h6> <div className="price_in_basket_list"><p>{smallTentCount} x 299,-</p><p>{smallTentCount * 299},-</p></div></div>
            }

            {bigTentCount > 0 && <div className="item_in_basket"><h6 className="item">Big tents</h6> <div className="price_in_basket_list"><p>{bigTentCount} x 399,-</p><p>{bigTentCount * 399},-</p></div></div>
            }

            <div className="item_in_basket price_in_basket_list"><p>Booking fee</p><p>99,-</p></div>

          </div>

          <div className="total_price"><h5>Total</h5><h5>{total},-</h5></div>
      </div>
      
    );
  }

  Basket.propTypes = {
    basketInfo: PropTypes.object,
}
  
  export default Basket;
  