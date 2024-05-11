import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import MultiselectFilter from '../components/MultiselectFilter'

//actions
import { updateEmployeeNumbers, clearFilter } from '../redux/jobs/actions'

//utils
import { filterOptions } from '../utils'

//constants
import { EMPLOYEE_FILTER } from '../constants'

const EmployeeFilter = () => {
    const dispatch = useDispatch();
    const {employeeNumber} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(EMPLOYEE_FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(EMPLOYEE_FILTER.options, employeeNumber)}))
    },[employeeNumber])

    const handleSelect = (no) => {
        dispatch(updateEmployeeNumbers(no));
    }

    const handleClearAll = () => {
        dispatch(clearFilter('employeeNumber', []))
    }

    const handleDelete = (text) => {
        const newEmployeeNumber = employeeNumber.filter((eN) => eN !== text)
        dispatch(clearFilter('employeeNumber', newEmployeeNumber))
    }

  return (
    <MultiselectFilter
        chips={employeeNumber}
        filter={filters}
        onSelect={handleSelect}
        handleClearAll={handleClearAll}
        handleDelete={handleDelete}
    />
  )
}

export default EmployeeFilter