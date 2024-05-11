import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

//component
import MultiselectFilter from '../components/MultiselectFilter'

//actions
import { updateBasePay, clearFilter } from '../redux/jobs/actions'

//utils
import { filterOptions } from '../utils'

//constants
import { BASE_PAY_FILTER } from '../constants'

const BasePayFilter = () => {

    const dispatch = useDispatch();
    const {basePay} = useSelector(state => state.jobReducer)

    const [filters, setFilters] = useState(BASE_PAY_FILTER);

    useEffect(() => {
        setFilters(prevItem => ({...prevItem, options: filterOptions(BASE_PAY_FILTER.options, basePay)}))
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
    <MultiselectFilter
      chips={basePay}
      filter={filters}
      onSelect={handleSelect}
      handleClearAll={handleClearAll}
      handleDelete={handleDelete}
    />
  )
}

export default BasePayFilter