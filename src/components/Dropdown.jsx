import React from 'react'

const Dropdown = ({showDropDownClass, options, onSelect, dropdownRef}) => {
  return (
    <div className={`dropdown-list-container ${options.length ? showDropDownClass : ''}`} id="dropdownMenu" ref={dropdownRef}>
        <ul class="list-container">
           {
               options.map((option) => {
                   const {value, name} = option
                   return (
                        <li className="list-item" onClick={() => onSelect(value)}>{name}</li>
                   )
               })
           }
        </ul>
    </div>
  )
}

export default Dropdown