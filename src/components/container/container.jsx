import React from 'react';
import './container.scss';

import JobListCard from '../job-list-card/job_card';
import Filters from '../filters/filter';
import JobDetails from '../job-details/job_details';

const Container = () => {
  const a = 10;

  return (
    <>
      <div className="container">
        <div className="content-wrapper">
          <div className="layout-side-left">
            <Filters list={['Bangalore', 'Canada', 'UK']} title="Filter by Location" />
            <Filters
              list={['Computer Software', 'Retail', 'Automotive']}
              title="Filter by Industry"
            />
            <Filters list={['Small', 'Large', 'Medium']} title="Filter by company size" />
          </div>
          <div className="layout-main">
            <JobListCard src="https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1646265600&v=beta&t=DvOAwYFZRVl0xF2ooRLLdxa6znEyeOhNynimiU7oWxU" />
            <JobListCard src="https://media-exp1.licdn.com/dms/image/C4E0BAQGgcRYcsEA95g/company-logo_100_100/0/1593617920398?e=1646265600&v=beta&t=igK8WcZHLH25TlT-h_2QkobktuLOVWTILupVWnKIDHM" />

            <JobListCard src="https://media-exp1.licdn.com/dms/image/C4D0BAQG_oY7LkqBPBA/company-logo_100_100/0/1622604168326?e=1646265600&v=beta&t=0KQuq7oiwCav52Kv2VNyCC3hdFqmAdFjKmvGTV0NzrY" />
            <JobListCard src="https://media-exp1.licdn.com/dms/image/C4D0BAQGLxWPpGqaVmw/company-logo_100_100/0/1607533344544?e=1646265600&v=beta&t=WhxciyIkq2UpMqecPplL2V_iFE4gse8Om7M0pDPTOZc" />
            <JobListCard src="https://media-exp1.licdn.com/dms/image/C4D0BAQG3WCPdHyRd3A/company-logo_100_100/0/1625154311040?e=1646265600&v=beta&t=sv5yjNYQwl1270L9wqRlZOTO_mIwqeiKVR66GQCR330" />
            <JobListCard src="https://media-exp1.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1618231291419?e=1646265600&v=beta&t=mKnMgCf11ffkVjAybPXmUivPCACf0xG3c_VmzSDtbXg" />
            <JobListCard />
            <JobListCard />
          </div>
          <div className="layout-side-right">
            <JobDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
