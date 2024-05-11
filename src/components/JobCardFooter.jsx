import React from 'react'

//utils
import { redirectToJobLink } from '../utils'

const JobCardFooter = ({item}) => {
  return (
    <div className="job-card-footer">
        <div className="status-container">
            <button type="button" className="status-button" onClick={() => redirectToJobLink(item.jdLink)}>
                ⚡ Easy Apply
            </button>
        </div>
    </div>
  )
}

export default JobCardFooter