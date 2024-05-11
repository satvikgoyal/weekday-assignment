import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateExperience, clearFilter } from '../redux/jobs/actions'
import MultiselectFilter from '../components/MultiselectFilter'
import { filterOptions } from '../utils'

const FILTER = {
    label: 'Experience',
    options: [
        {name: '1', value: '1'},
        {name: '2', value: '2'},
        {name: '3', value: '3'},
        {name: '4', value: '4'},
        {name: '5', value: '5'},
        {name: '6', value: '6'},
        {name: '7', value: '7'},
        {name: '8', value: '8'},
        {name: '9', value: '9'},
    ]
}
const ExperienceFilter = () => {

    const dispatch = useDispatch();
    const {experience} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(FILTER.options, experience)}))
    },[experience])

    const handleSelect = (experience) => {
        dispatch(updateExperience(experience));
    }

    useEffect(() => {
        console.log('experience', experience);
    }, [experience]);

    const handleClearAll = () => {
        dispatch(clearFilter('experience', []))
    }

    const handleDelete = (yrs) => {
        const newExp = experience.filter((exp) => exp !== yrs)
        dispatch(clearFilter('experience', newExp))
    }

  return (
    <MultiselectFilter chips={experience} filter={filters} onSelect={handleSelect} handleClearAll={handleClearAll} handleDelete={handleDelete}/>
  )
}

export default ExperienceFilter