import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

//actions
import { updateCompanyName } from '../redux/jobs/actions'

const CompanyFilter = () => {

    const dispatch = useDispatch();
    const {companyName} = useSelector(state => state.jobReducer)

    const handleChange = (companyName) => {
        dispatch(updateCompanyName(companyName));
    }

  return (
    <div className="filter-content">
      <p className="filter-label">Company Name</p>
      <div className="multi-select-filter-container company-name-filter">
        <div className="input-container">
            {(!companyName ? <div className="placeholder-text">Company Name</div> : null)}
            <input
                class="select__input input-text"
                autocapitalize="none"
                autocomplete="off"
                autocorrect="off"
                id="react-select-3-input"
                spellcheck="false"
                tabindex="0"
                type="text"
                aria-autocomplete="list"
                aria-expanded="false"
                aria-haspopup="true"
                role="combobox"
                value={companyName}
                onChange={e => handleChange(e.target.value)}
            />
        </div>
      </div>
    </div>
  )
}

export default CompanyFilter