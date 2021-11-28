/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../shared-components/card';
import './job_details.scss';

const JobDetails = (props) => {
  const { handleOnClick } = props;
  const selectedJobData = useSelector((state) => state.jobPortalData.selectedJobData);

  const {
    jobTitle,
    company,
    empType,
    location,
    headCount,
    salary,
    role,
    rolesResp,
    country,
    src,
    needToHave,
  } = selectedJobData;
  return (
    <>
      <Card cssClass="remove-padding-right align">
        <div className="job-details">
          <div className="close-icon" onClick={() => handleOnClick(false)}>
            <i className="fa fa-times-circle" aria-hidden="true" />
          </div>
          <div className="job-details-header">
            <h4>{jobTitle}</h4>
            <h5>{company}</h5>
            <img src={src} alt={company} />
          </div>
          <div className="job-details-container">
            <ul className="">
              <li>
                <i className="fa fa-briefcase" /> {empType}
              </li>
              <li>
                <i className="fa fa-usd" /> {salary}
              </li>
              <li>
                <i className="fa fa-building" />
                {headCount}
              </li>
            </ul>
            <div className="job-details-descp">
              <h4>Job Details:</h4>
              <p>
                <h5>Office Location:</h5>
                <span>
                  {location}, {country}
                </span>
              </p>

              <p>
                <h5>Role</h5>
                <span>{role}</span>
              </p>
              <p>
                <h5>Key Responsibility</h5>
                <span>{rolesResp}</span>
              </p>
              <p>
                <h5>Need to Haves</h5>
                <span>{needToHave}</span>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

JobDetails.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default JobDetails;
