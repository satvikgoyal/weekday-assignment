import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateLocations, clearFilter } from '../redux/jobs/actions'
import MultiselectFilter from '../components/MultiselectFilter'
import { filterOptions } from '../utils'

const FILTER = {
  label: 'Remote',
  options: [
    {name: 'Hybrid', value: 'hybrid'},
    {name: 'Remote', value: 'remote'},
    {name: 'In-office', value: 'in-office'}
  ]
}

const RemoteFilter = () => {
    const dispatch = useDispatch();
    const {locations} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(FILTER.options, locations)}))
    },[locations])

    useEffect(() => {
        console.log('filters', filters)
    }, [filters])

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

  const handleInputChange = (location)=> {
    dispatch(updateLocations(location));
  }
  return (
    <MultiselectFilter chips={locations} filter={filters} onSelect={handleSelect} handleClearAll={handleClearAll} handleDelete={handleDelete} handleInputChange={handleInputChange}/>
  )
}

export default RemoteFilter