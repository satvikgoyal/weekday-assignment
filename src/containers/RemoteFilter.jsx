import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import MultiselectFilter from '../components/MultiselectFilter'

//actions
import { updateLocations, clearFilter } from '../redux/jobs/actions'

//utils
import { filterOptions } from '../utils'

//constants
import { REMOTE_FILTER } from '../constants'

const RemoteFilter = () => {
    const dispatch = useDispatch();
    const {locations} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(REMOTE_FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(REMOTE_FILTER.options, locations)}))
    },[locations])

    const handleSelect = (no) => {
        dispatch(updateLocations(no));
    }

    const handleClearAll = () => {
      dispatch(clearFilter('locations', []))
  }

  const handleDelete = (text) => {
    const newLocations = locations.filter((location) => location !== text)
    dispatch(clearFilter('locations', newLocations))
  }

  return (
    <MultiselectFilter
      chips={locations}
      filter={filters}
      onSelect={handleSelect}
      handleClearAll={handleClearAll}
      handleDelete={handleDelete}
    />
  )
}

export default RemoteFilter