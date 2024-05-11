import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import MultiselectFilter from '../components/MultiselectFilter'

//actions
import { updateRoles, clearFilter } from '../redux/jobs/actions'

//utils
import { filterOptions } from '../utils'

//constants
import { ROLES_FILTER } from '../constants'

const RoleFilter = () => {
    const dispatch = useDispatch();
    const {roles} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(ROLES_FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(ROLES_FILTER.options, roles)}))
    },[roles])

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
    <MultiselectFilter
        chips={roles}
        filter={filters}
        onSelect={handleSelect}
        handleClearAll={handleClearAll}
        handleDelete={handleDelete}
    />
  )
}

export default RoleFilter