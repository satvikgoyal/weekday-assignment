import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateRoles, clearFilter } from '../redux/jobs/actions'
import MultiselectFilter from '../components/MultiselectFilter'
import { filterOptions } from '../utils'

const FILTER = {
    label: 'Roles',
    options: [
        {name: 'Frontend', value: 'frontend'},
        {name: 'Backend', value: 'backend'},
        {name: 'Fullstack', value: 'fullstack'},
        {name: 'Android', value: 'android'},
        {name: 'Ios', value: 'ios'},
        {name: 'Tech lead', value: 'tech lead'},
    ]
}
const RoleFilter = () => {
    const [inputVal, setInputVal] = useState('');

    const dispatch = useDispatch();
    const {roles} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(FILTER.options, roles)}))
    },[roles])

    const handleInputValChange = (val) => {
        setInputVal(val);
    }

    const handleSelect = (role) => {
        dispatch(updateRoles(role));
    }

    const handleClearAll = () => {
        dispatch(clearFilter('roles', []))
    }

    const handleDelete = (text) => {
        const newRoles = roles.filter((role) => role !== text)
        dispatch(clearFilter('roles', newRoles))
    }
  return (
    <MultiselectFilter chips={roles} filter={filters} onSelect={handleSelect} handleClearAll={handleClearAll} handleDelete={handleDelete} handleInputChange={handleInputValChange} inputVal={inputVal}/>
  )
}

export default RoleFilter