import React from 'react';
import Card from '../shared-components/card';
import './job_details.scss';

const JobDetails = (props) => {
  const a = 10;

  return (
    <>
      <Card cssClass="remove-padding-right">
        <div className="job-details">
          <div className="job-details-header">
            <h4>Senior Software Engineer</h4>
            <h5>IBM</h5>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQG_oY7LkqBPBA/company-logo_100_100/0/1622604168326?e=1646265600&v=beta&t=0KQuq7oiwCav52Kv2VNyCC3hdFqmAdFjKmvGTV0NzrY"
              alt="image for company"
            />
          </div>
          <div className="job-details-container">
            <ul className="">
              <li>
                <i className="fa fa-briefcase" /> 6-8 years exp
              </li>
              <li>
                <i className="fa fa-usd" /> Package
              </li>
              <li>
                <i className="fa fa-building" />
                Location
              </li>
            </ul>
            <div className="job-details-descp">
              <h4>Job Details:</h4>
              <p>
                <h5>Office Location:</h5>
                <span>Victoria, BC or Remote from anywhere in the world!</span>
              </p>
              <p>
                <h5>Relocation option:</h5>
                <span>
                  We are completely remote friendly - you can work from anywhere in THE WORLD that
                  suits you best. We only ask that you try to work in the Pacific time zone (PST.)
                </span>
              </p>
              <p>
                <h5>Role</h5>
                <span>
                  Want to become a world class Software Developer and work with one of Canada's
                  fastest growing companies? Join our remarkable web development team and build new
                  apps from the ground-up every 3-12 months.
                </span>
              </p>
              <p>
                <h5>Key Responsibility</h5>
                <span>
                  Analyze business problems of our clients and help formulate technology roadmap;
                  Identify and propose technology solutions viable to the client needs; Collaborate
                  with other web experts and address business, technical, and logical needs;
                  Generate interface designs, prototypes, data flow diagrams, and system models;
                  Participate in web app development, deployment, and migration;
                </span>
              </p>
              <p>
                <h5>Need to Haves</h5>
                <span>
                  A completed or in progress BS/MS in Computer Science or related discipline. 5+
                  years as a Software Developer in a professional setting. Experience with JS
                  frameworks, preferably React/Redux; Experience with implementing UI designs using
                  JS, CSS and HTML; Experience with using deployment tools on AWS, Google Cloud or
                  equivalent;
                </span>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default JobDetails;
