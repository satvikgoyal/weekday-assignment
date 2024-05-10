import React from 'react'
import JobCardBody from './JobCardBody'
import JobCardFooter from './JobCardFooter'
import JobCardHeader from './JobCardHeader'

const JobCard = ({item}) => {
  return (
    <div className="job-card-container">
        <JobCardHeader/>
        <JobCardBody item={item}/>
        <JobCardFooter item={item}/>
    </div>
  )
}

export default JobCard