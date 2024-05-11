import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateBasePay, clearFilter } from '../redux/jobs/actions'
import MultiselectFilter from '../components/MultiselectFilter'
import { filterOptions } from '../utils'

const FILTER = {
  label: 'Min Base Pay',
  options: [
    {name: '10L', value: '10L'},
    {name: '20L', value: '20L'},
    {name: '30L', value: '30L'},
    {name: '40L', value: '40L'},
    {name: '50L', value: '50L'},
    {name: '60L', value: '60L'},
    {name: '70L', value: '70L'},
  ]
}

const BasePayFilter = () => {

    const dispatch = useDispatch();
    const {basePay} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(FILTER.options, basePay)}))
    },[basePay])

    const handleSelect = (basePay) => {
        handleClearAll();
        dispatch(updateBasePay(basePay));
    }

    const handleClearAll = () => {
      dispatch(clearFilter('basePay', []))
    }

    const handleDelete = (pay) => {
      const newExp = basePay.filter((bp) => bp !== pay)
      dispatch(clearFilter('basePay', newExp))
  }

  return (
    <MultiselectFilter chips={basePay} filter={filters} onSelect={handleSelect} handleClearAll={handleClearAll} handleDelete={handleDelete}/>
  )
}

export default BasePayFilter