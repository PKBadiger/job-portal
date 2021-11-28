import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import notFoundImage from '../../assets/images/not-found.png';
import './container.scss';

import JobListCard from '../job-list-card/job_card';
import Filters from '../filters/filter';
import JobDetails from '../job-details/job_details';
import useToggle from '../custom_hooks/useToggle';

import { getJobList } from '../../redux/actions/job_portal-actions';
import Card from '../shared-components/card';

const Container = () => {
  const dispatch = useDispatch();
  const jobPortalData = useSelector((state) => state.jobPortalData);
  const { isLoading, jobList } = jobPortalData;
  const [open, handleOnClick] = useToggle(false);

  useEffect(() => {
    dispatch(getJobList());
  }, []);

  const locations = useMemo(() => ['Bangalore', 'Canada', 'UK'], []);
  const industry = useMemo(() => ['Computer Software', 'Retail', 'Automotive'], []);
  const size = useMemo(() => ['Small', 'Large', 'Medium'], []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  console.log(!jobList.length);

  return (
    <>
      <div className="container">
        <div className="content-wrapper">
          <div className="layout-side-left">
            <Filters list={locations} title="Filter by Location" />
            <Filters list={industry} title="Filter by Industry" />
            <Filters list={size} title="Filter by company size" />
          </div>
          <div className="layout-main">
            {jobList.map((data) => (
              <JobListCard key={data.id} jobDetailsData={data} handleOnClick={handleOnClick} />
            ))}
            {!jobList.length && (
              <Card>
                <div>
                  <img src={notFoundImage} alt="job search not found image" />
                  <h1>Could not find jobs matching your search criteria </h1>
                </div>
              </Card>
            )}
          </div>
          <div className="layout-side-right">
            {open && <JobDetails handleOnClick={handleOnClick} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
