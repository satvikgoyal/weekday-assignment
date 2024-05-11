import { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './components/JobCard';
import { useDispatch, useSelector } from 'react-redux';
import { updateJobs } from './redux/jobs/actions';
import RoleFilter from './containers/RoleFilter';
import EmployeeFilter from './containers/EmployeeFilter';
import RemoteFilter from './containers/RemoteFilter';
import TechStackFilter from './containers/TechStackFilter';
import BasePayFilter from './containers/BasePayFilter';
import CompanyFilter from './containers/CompanyFilter';
import { filterJobs } from './utils';
import Spinner from './components/Spinner';
import './App.css';
import ExperienceFilter from './containers/ExperienceFilter';

const THRESHOLD = 10;

function App() {
  const {
    roles,
    experience,
    basePay,
    companyName,
    items
  } = useSelector(state => state.jobReducer);

  const dispatch = useDispatch()

  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loader, showLoader] = useState(false);

  const [jobs, setJobs] = useState(items || []);

  const fetchData = async () => {
    setIsLoading(true);
    try{
      const res = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        limit: 12,
        offset: page
      })
      dispatch(updateJobs(res.data.jdList));
      setPage(prevPage => prevPage + 1);
    }catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  }

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - THRESHOLD
      && !isLoading
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, handleScroll]);

  useEffect(async () => {
      showLoader(true);
      await fetchData();
      showLoader(false);

      return () => {
        dispatch(updateJobs([]));
      }
  },[]);

  useEffect(() => {
    if(items.length){
      showLoader(true);
      const newJobs = filterJobs({
        roles,
        experience,
        basePay,
        companyName,
        items,
      })
      setJobs(newJobs);
      showLoader(false);
    }
  }, [
    roles,
    experience,
    basePay,
    companyName,
    items
  ])

  return (
    <div className="main-content">
      <div className="filters-container">
        <RoleFilter/>
        <EmployeeFilter/>
        <ExperienceFilter/>
        <RemoteFilter/>
        <TechStackFilter/>
        <BasePayFilter/>
        <CompanyFilter/>
      </div>
      {!loader ?
        (
          <div className="job-container">
            {
              jobs.length > 0 ? jobs.map((job) => {
                return (
                  <JobCard item = {job}/>
                )
              })
              : <p>No records found</p>
            }
          </div>
        )
       : <Spinner center/>}
    </div>
  );
}

export default App;
