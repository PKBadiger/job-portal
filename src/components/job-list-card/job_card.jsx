import React from 'react';
import Card from '../shared-components/card';
import './job_card.scss';

const JobListCard = (props) => {
  const { src } = props;

  return (
    <>
      <Card>
        <div className="job-container">
          <div className="org-logo">
            <img src={src} alt="ibm logo" />
          </div>
          <div className="job-pofile">
            <h4>Software Developer - AIX</h4>
            <span>
              <h5>VM Ware</h5>
              <h6>Bengaluru, Karnataka, India(Remote)</h6>
            </span>
            <p className="description">
              analyze statistical data, such as mortality, accident, sickness, disability, and
              retirement rates and construct probability tables to forecast risk and liability for
              payment of future benefits. may ascertain insurance rates required and cash reserves
              necessary to ensure payment of future benefits.
            </p>
            <div className="job-profile-footer">
              <p>Posted: a day ago</p>
            </div>
          </div>
          <div className="job-details">
            <a href="#">View</a>
          </div>
        </div>
      </Card>
    </>
  );
};

export default JobListCard;
