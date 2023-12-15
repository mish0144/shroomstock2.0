import "../css/style.css";
import "../css/areas.css";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const loadList = async (setAvailableAreas, setIsLoading) => {
  const response = await fetch("http://localhost:8080/available-spots")
  const list = await response.json()
  console.log(list)
  setAvailableAreas(list)
  setIsLoading(false)
}

function AreaForm({setArea, ticketsWanted}) {
  const [isLoading, setIsLoading] = useState(true)
  const [availableAreas, setAvailableAreas] = useState([])
  useEffect(() => {
    loadList(setAvailableAreas, setIsLoading)
  }, [])

  return (
    <>
      { isLoading && <div key="form-loading">Loading</div> }
      {
        !isLoading && <form key="form-ready" className="grid-container" style={{display: 'flex', flexDirection: 'column'}}>
        { availableAreas.map((area, index) => (<>
          <label htmlFor={`area-${index}`} key={area.id}>{ area.area }
            <input disabled={area.available < ticketsWanted} key={area.id} type="radio" id={`area-${index}`} onChange={event => setArea(event.target.value)} name="area" value={area.area} required/>
          </label>
        </>))
        }
        </form>
        
      }
    
    </>
    
  );
}

AreaForm.propTypes = {
    setArea: PropTypes.func,
    ticketsWanted: PropTypes.number,
}

export default AreaForm;
