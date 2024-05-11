import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTechStacks, clearFilter } from '../redux/jobs/actions'
import MultiselectFilter from '../components/MultiselectFilter'
import { filterOptions } from '../utils'

const FILTER = {
    label: 'Tech Stack',
    options: [
        {name: 'Java', value: 'java'},
        {name: 'Ruby', value: 'ruby'},
        {name: 'Golang', value: 'golang'},
        {name: 'Javascript', value: 'javascript'},
        {name: 'C++', value: 'c++'},
        {name: 'HTML', value: 'html'},
        {name: 'CSS', value: 'css'},
    ]
}

const TechStackFilter = () => {
    const dispatch = useDispatch();
    const {techStack} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(FILTER.options, techStack)}))
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
    <MultiselectFilter chips={techStack} filter={filters} onSelect={handleSelect} handleClearAll={handleClearAll} handleDelete={handleDelete}/>
  )
}

export default TechStackFilter