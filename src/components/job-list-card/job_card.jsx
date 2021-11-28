import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Card from '../shared-components/card';
import './job_card.scss';
import { getSelectedJobData } from '../../redux/actions/job_portal-actions';

const JobListCard = (props) => {
  const dispatch = useDispatch();
  const { jobDetailsData, handleOnClick } = props;
  const { src, jobTitle, company, location, country, postedOn, companyDescp } = jobDetailsData;

  const handleOnClickView = (selectedJobData) => {
    dispatch(getSelectedJobData(selectedJobData));
    handleOnClick(true);
  };

  return (
    <>
      <Card>
        <div className="job-container">
          <div className="org-logo">
            <img src={src} alt="ibm logo" />
          </div>
          <div className="job-pofile">
            <h4>{jobTitle}</h4>
            <span>
              <h5>{company}</h5>
              <h6>
                {location}, {country}
              </h6>
            </span>
            <p className="description">{companyDescp}</p>
            <div className="job-profile-footer">
              <p>{postedOn}</p>
            </div>
          </div>
          <div className="job-details">
            <a href="#" onClick={() => handleOnClickView(jobDetailsData)}>
              View
            </a>
          </div>
        </div>
      </Card>
    </>
  );
};

export default React.memo(JobListCard);
