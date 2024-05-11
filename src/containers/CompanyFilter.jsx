import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//actions
import { updateCompanyName } from '../redux/jobs/actions'

const CompanyFilter = () => {

    const dispatch = useDispatch();
    const {companyName} = useSelector(state => state.jobReducer)

    const [showInput, setShowInput] = useState(false);

    const handleChange = (companyName) => {
        dispatch(updateCompanyName(companyName));
    }

    const handleClick = () => {
      setShowInput(true)
    }

  return (
    <div className="filter-content">
      <p className="filter-label">Company Name</p>
      <div className="multi-select-filter-container company-name-filter">
        <div className="input-container">
            {(!companyName && !showInput? <div className="placeholder-text" onClick={handleClick}>Company Name</div> : null)}
            { showInput ? <input
                className="select__input input-text"
                autocapitalize="none"
                autocomplete="off"
                autocorrect="off"
                id="react-select-3-input"
                spellcheck="false"
                tabindex="0"
                type="text"
                value={companyName}
                autoFocus={true}
                onBlur={() => setShowInput(false)}
                onChange={e => handleChange(e.target.value)}
            />: null}
        </div>
      </div>
    </div>
  )
}

export default CompanyFilter