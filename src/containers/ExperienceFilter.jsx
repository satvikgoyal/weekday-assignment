import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import MultiselectFilter from '../components/MultiselectFilter'

//actions
import { updateExperience, clearFilter } from '../redux/jobs/actions'

//utils
import { filterOptions } from '../utils'

//constants
import { EXPERIENCE_FILTER } from '../constants'

const ExperienceFilter = () => {

    const dispatch = useDispatch();
    const {experience} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(EXPERIENCE_FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(EXPERIENCE_FILTER.options, experience)}))
    },[experience])

    const handleSelect = (experience) => {
        dispatch(updateExperience(experience));
    }

    const handleClearAll = () => {
        dispatch(clearFilter('experience', []))
    }

    const handleDelete = (yrs) => {
        const newExp = experience.filter((exp) => exp !== yrs)
        dispatch(clearFilter('experience', newExp))
    }

  return (
    <MultiselectFilter
        chips={experience}
        filter={filters}
        onSelect={handleSelect}
        handleClearAll={handleClearAll}
        handleDelete={handleDelete}
    />
  )
}

export default ExperienceFilter