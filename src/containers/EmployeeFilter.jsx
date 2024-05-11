import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEmployeeNumbers, clearFilter } from '../redux/jobs/actions'
import MultiselectFilter from '../components/MultiselectFilter'
import { filterOptions } from '../utils'

const FILTER = {
    label: 'No Of Employees',
    options: [
      {name: '1-10', value: '1-10'},
      {name: '11-20', value: '11-20'},
      {name: '50-100', value: '50-100'},
      {name: '100-150', value: '100-150'}
    ]
}

const EmployeeFilter = () => {
    const dispatch = useDispatch();
    const {employeeNumber} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(FILTER.options, employeeNumber)}))
    },[employeeNumber])

    useEffect(() => {
        console.log('filters', filters)
    }, [filters])

    const handleSelect = (no) => {
        dispatch(updateEmployeeNumbers(no));
    }

    const handleClearAll = () => {
        dispatch(clearFilter('employeeNumber', ''))
    }

    const handleDelete = (text) => {
        const newEmployeeNumber = employeeNumber.filter((eN) => eN !== text)
        dispatch(clearFilter('employeeNumber', newEmployeeNumber))
    }

    const handleInputChange = (employeeNumber)=> {
        dispatch(updateEmployeeNumbers(employeeNumber));
    }
  return (
    <MultiselectFilter chips={employeeNumber} filter={filters} onSelect={handleSelect} handleClearAll={handleClearAll} handleDelete={handleDelete} handleInputChange={handleInputChange}/>
  )
}

export default EmployeeFilter