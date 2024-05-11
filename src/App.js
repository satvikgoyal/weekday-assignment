import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

//components
import JobCard from './components/JobCard';
import RoleFilter from './containers/RoleFilter';
import ExperienceFilter from './containers/ExperienceFilter';
import EmployeeFilter from './containers/EmployeeFilter';
import RemoteFilter from './containers/RemoteFilter';
import TechStackFilter from './containers/TechStackFilter';
import BasePayFilter from './containers/BasePayFilter';
import CompanyFilter from './containers/CompanyFilter';
import Spinner from './components/Spinner';

//actions
import { updateJobs } from './redux/jobs/actions';

//utils
import { filterJobs } from './utils';

//constants
import { SCROLL_THRESHOLD } from './constants';

//css
import './App.css';

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

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try{
      const res = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        limit: 12,
        offset: page
      })
      dispatch(updateJobs(res.data.jdList));

      //setting page value to decide offset
      setPage(prevPage => prevPage + 1);
    }catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  }, [page, dispatch])

  //logic to perform infinite scroll
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - SCROLL_THRESHOLD
      && !isLoading
    ) {
      fetchData();
    }
  },[fetchData, isLoading]);

  //adding the handleScroll function to eventlistner
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, handleScroll]);

  //fetching data when component mounts
  useEffect(() => {
      showLoader(true);
      fetchData().finally(() => {
        showLoader(false);
      });

      //clearing up jobs when component unmounts
      return () => {
        dispatch(updateJobs([]));
      }
  },[]);


  //logic to perform filter operations
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
