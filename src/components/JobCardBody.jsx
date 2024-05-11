import React from 'react'

//utils
import { getSalary } from '../utils'

const JobCardBody = ({item}) => {
  return (
    <div className="job-card-body">
        <div className="company-details-container">
            <img className="company-logo" src={item.logoUrl} alt="img"/>
            <div>
                <div className="info-container">
                    <h3 className="company-name">{item.companyName}</h3>
                    <h2 className="designation">{item.jobRole} Engineer</h2>
                </div>
                <p className="cards-sub-text">{item.jobLocation}</p>
            </div>
        </div>
        <p className="card-salary">Estimated Salary: {getSalary(item)}
            <span aria-label="Offered salary range" className=""> ✅</span>
        </p>
        <div className="company-info-container">
            <p className="info-title">About company</p>
            <div className="about-us-container">
                <p className="title">About us</p>
                <p><span className="font-14">{item.jobDetailsFromCompany}</span></p>
                <p><strong>Founder/Recruiter profiles:</strong></p>
                <p><a href="https://www.linkedin.com/in/mehtaarpit/"><span className="font-14">Arpit Mehta</span></a></p>
            </div>
            <p className="about-role-title">About Role:</p>
            <div className="role-info-container">
                <p><strong>Overview</strong></p>
                <p>
                    <span className="font-14">Company name: </span><strong>Fuze </strong><span className="font-14">| HQ Location: </span><strong>Abu Dhabi</strong><strong> | </strong><a href="https://fuzefinance.com/"><strong>Website</strong></a><strong> | </strong><a href="https://www.linkedin.com/company/fuzehq/"><strong>LinkedIn</strong></a>
                </p>
                <p>
                    <strong>Role: Frontend Engineer</strong>
                </p>
                <ul>
                    <li className="role-points"><span className="role-points">Salary: Rs. 25-50 lakhs per annum</span></li>
                    <li className="role-points"><span className="role-points">Experience: 2+ years</span></li>
                    <li className="role-points"><span className="role-points">Location: Bangalore</span></li>
                    <li className="role-points"><span className="role-points">Type: Full-time</span></li>
                </ul>
            </div>
        </div>
        <div className="view-job-container">
            <a href={item.jdLink}>View job</a>
        </div>
        <div className="info-container poc-info-container">
            <h3 style={{marginTop: '10px'}}>Minimum Experience</h3>
            <h2 className="experience-time">{item.minExp ?? (item.maxExp ?? '0-1 yrs')}</h2>
        </div>
    </div>
  )
}

export default JobCardBody