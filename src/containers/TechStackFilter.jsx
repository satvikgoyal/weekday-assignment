import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import MultiselectFilter from '../components/MultiselectFilter'

//actions
import { updateTechStacks, clearFilter } from '../redux/jobs/actions'

//utils
import { filterOptions } from '../utils'

//constants
import { TECH_STACK_FILTER } from '../constants'

const TechStackFilter = () => {
    const dispatch = useDispatch();
    const {techStack} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(TECH_STACK_FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(TECH_STACK_FILTER.options, techStack)}))
    },[techStack])

    const handleSelect = (tech) => {
        dispatch(updateTechStacks(tech));
    }

    const handleClearAll = () => {
        dispatch(clearFilter('techStack', []))
    }

    const handleDelete = (text) => {
        const newTechStack = techStack.filter((stack) => stack !== text)
        dispatch(clearFilter('techStack', newTechStack))
    }

  return (
    <MultiselectFilter
        chips={techStack}
        filter={filters}
        onSelect={handleSelect}
        handleClearAll={handleClearAll}
        handleDelete={handleDelete}
    />
  )
}

export default TechStackFilter