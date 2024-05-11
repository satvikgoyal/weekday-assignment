import React, { useState, useRef } from 'react'

//components
import Chips from './Chips'
import Dropdown from './Dropdown'

//customhook
import { useClickOutSide } from '../customhooks/clickoutside';

const MultiselectFilter = (props) => {
  const {filter, chips, onSelect, inputVal, handleClearAll, handleDelete, handleInputChange} = props;
  const [showDropDownClass, setShowDropdownClass] = useState("");

  //using to maintain the get the current state of the referenced object
  const dropdownRef = useRef(null);

  const onOutSideClick = () => {
    setShowDropdownClass("");
  }

  const handleDropdown = () => {
    setShowDropdownClass("show-dropdown")
  }

  //calling the custom hook function to close the dropdown if clicked outside
  useClickOutSide([dropdownRef], onOutSideClick)


  return (
    <div className="filter-content">
      <p className="filter-label">{filter.label}</p>
      <div className="multi-select-filter-container">
        <div className={`value-container${chips?.length ? ' chip-container' : ''}`}>
          {
            chips?.length ?
                  chips.map((role) => {
                    return <Chips text={role} handleDelete={handleDelete} key={role}/>
                  }) :
              (!inputVal ? <div className="placeholder-text">{filter.label}</div> : null)
          }
          {!chips ? <div className={`input-container${inputVal ? ' text-value-container': ''}`}>
            <input
              class={`select__input${inputVal ? ' input-text': ''}`}
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
              value={inputVal}
              autoFocus={true}
              onChange={(e) => handleInputChange(e.target.value)}
              />
          </div> : null}
        </div>
        <div className="cross-container" onClick={handleClearAll}>
          <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="icon-svg"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>
        </div>
        <span className="divider"/>
        <div className="dropdown-arrow-container">
          <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="icon-svg dropdown-toggle" onClick={handleDropdown}>
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
        </div>
      </div>
      <Dropdown showDropDownClass={showDropDownClass} dropdownRef={dropdownRef} options={filter.options} onSelect={onSelect}/>
    </div>
  )
}

export default MultiselectFilter