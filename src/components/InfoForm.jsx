// import "./style.css";

import PropTypes from 'prop-types';

function InfoForm({participantsTotal, setNameList}) {

    return (
      <form className="grid-container">

         { new Array(participantsTotal).fill(0).map((_,index) => (<>
          <label htmlFor={`Name-${index}`} key={`Name-${index}`}>Person {index + 1}</label>
            <input type="text" id={`Name-${index}`} onChange={event => setNameList(index, event.target.value)} name="name" required/>
        </>))
        }
      </form>
    );
  }
  
  InfoForm.propTypes = {
    participantsTotal: PropTypes.number,
    setNameList: PropTypes.func,
  }
  
  export default InfoForm;
  