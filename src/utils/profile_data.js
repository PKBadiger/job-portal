const jobProfiles = [
  {
    id: 1,
    jobTitle: 'Senior Full Stack Developer',
    company: 'IBM',
    location: 'Ottawa',
    country: 'Canada',
    empType: 'Full -Time',
    salary: 'Not Discoled',
    headCount: '10000+',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'],
    companyDescp: `As an Application Developer, you will lead IBM into the future by 
      translating system requirements into the design and development of customized systems 
      in an agile environment. The success of IBM is in your hands as you transform vital 
      business needs into code and drive innovation.`,
    postedOn: '3 days ago',
    role: `We are at a tipping point in history where the impact of technology on business 
            is significant enough to transform the whole way that business operates.`,
    rolesResp: `As a Senior Full-Stack Developer at IBM iX (under IBM Consulting), you 
                are a team player that enables our client's product vision to come to 
                fruition on time and in a secure, reliable, reusable, and scalable way.`,
    needToHave: `Bachelor's degree in one of the following areas: computer science, 
                   engineering, MIS or related field 3-5 years of experience in technology 
                   or related field, with relevant experience in user-centric digital 
                   engagements Experience with web development technologies including HTML, 
                   CSS, JavaScript as well as experience with one or more of Angular, React, 
                   Vue Experience with cross platform technologies such as Flutter, 
                   ReactNative, NativeScript`,
    src: `https://media-exp1.licdn.com/dms/image/C4D0BAQGjwPKNaVZ7jQ/company-logo_100_100/0/1625578658814?e=1646265600&v=beta&t=Uhq4cv8FfVukYWj1Jpmdss1nEXm2zsoAt0zMyC2x-W8`,
  },
  {
    id: 2,
    jobTitle: 'Full Stack Developer',
    company: 'FreshWorks Studio',
    location: 'Victoria, BC',
    country: 'Canada',
    empType: 'Part-Time',
    salary: 'Not Discoled',
    headCount: '85+',
    skills: ['HTML', 'CSS', 'Angular', 'Vue', 'Python'],
    companyDescp: `Equity, Diversity, and Inclusion are not just buzzwords at FreshWorks Studio. 
                   Organizations, communities, and society can reap the benefits through 
                   embracing different perspectives. By respectfully challenging the status 
                   quo and continuously exploring the biases that exist around and within us, 
                   we aim to educate our team and positively impact the wider community.`,
    postedOn: '10 days ago',
    role: `In this role, your main responsibility is to ensure the performance, quality, and 
          responsiveness of web applications is up to FreshWorks’ standards of excellence. 
          You will work as part of a multi-functional agile team to address business, 
          technical, and logistical project needs.`,
    rolesResp: `Analyze business problems of our clients and help formulate technology roadmap;
              - Identify and propose technology solutions viable to the client needs;
              - Collaborate with other web specialists and address business, technical, 
                and logical needs;
              - Generate interface designs, prototypes, data flow diagrams, and system models;
              - Participate in web app development, deployment, and migration;`,
    needToHave: `A completed or in progress BS/MS in Computer Science or related field. Diploma 
                 certificates are also okay;
              - 2+ years as a Software Developer in a professional setting. 
                Co-op experience counts too;
              - Experience with JS frameworks, preferably React/Redux;
              - Experience with implementing UI designs using JS, CSS and HTML;
              - Experience with using deployment tools on AWS, Google Cloud or equivalent;`,
    src: `data:image/png;base64,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`,
  },
  {
    id: 3,
    jobTitle: 'Senior Software Engineer',
    company: 'Apple',
    location: 'Vancouver, BC',
    country: 'Canada',
    empType: 'Full -Time',
    salary: 'Not Discoled',
    headCount: '10000+',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'],
    companyDescp: `Apple Media Products (AMP) first delighted users with downloadable music in 
                    April 2003 with the opening of the iTunes Store. Since then, AMP has delivered 
                    countless innovations around the digital delivery of audio and video, and 
                    in 2008 revolutionized smartphone app distribution with the launch 
                    of the App Store.`,
    postedOn: '3 days ago',
    role: `We are at a tipping point in history where the impact of technology on business 
            is significant enough to transform the whole way that business operates.`,
    rolesResp: `ou will participate in designing and implementing logic for 
                ingesting apps that demonstrate new features in future devices 
                and upcoming versions of iOS, tvOS and macOS. You will implement 
                functionality that analyzes apps on ingest, extracting and storing
                 information displayed on the App Store, and used in the App Store’s
                  review and curation processes.`,
    needToHave: `At least 5 years hands-on experience with the following:
                  Deep knowledge of Java
                  Expertise in Object Oriented Design and Programming
                  Experience taking a reasonably large area of functionality live into Production
                  Building application server components and services
                  Designing and implementing secure REST APIs
                  Schema design for a high-performance database like Cassandra`,
    src: `https://media-exp1.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_100_100/0/1595530301220?e=1646265600&v=beta&t=aKRtG7TGUG9Sls2lYkK-nAWKhOEyZ_pUbBg2dxLLw10`,
  },
  {
    id: 4,
    jobTitle: 'Front End Web Developer',
    company: 'Avanade',
    location: 'Halifax, NS',
    country: 'Canada',
    empType: 'Part-time: Entry level',
    salary: '95K-100K',
    headCount: '10000+',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'],
    companyDescp: `Avanade is the leading provider of innovative digital and cloud services, 
                   business solutions and design-led experiences on the Microsoft ecosystem. 
                   Our professionals bring bold, fresh thinking combined with technology, 
                   business and industry expertise to help make a genuine human impact 
                   on our clients`,
    postedOn: '1 day ago',
    role: `As a Front-End Web Developer and Consultant, you will have an amazing opportunity 
          to develop interesting and meaningful web applications and receive mentorship 
          from some of the brightest minds in Toronto’s software engineering community. `,
    rolesResp: `Proficiency in HTML5, CSS, and JavaScript across one or more user interface 
                libraries and NodeJS You likely have a Computer Science degree or equivalent
                 background and 2 or more years of web development experience.`,
    needToHave: `At least 5 years hands-on experience with the following:
                  Deep knowledge of Java
                  Expertise in Object Oriented Design and Programming
                  Experience taking a reasonably large area of functionality live into Production
                  Building application server components and services
                  Designing and implementing secure REST APIs
                  Schema design for a high-performance database like Cassandra`,
    src: `https://media-exp1.licdn.com/dms/image/C4E0BAQF3iS1VURmDaw/company-logo_100_100/0/1625863151506?e=1646265600&v=beta&t=Cnzvh0oX-QGpcaWympQz82jQdQRJp8z9V4crcGTpUC0`,
  },
  {
    id: 5,
    jobTitle: 'Senior Data Scientist',
    company: 'Sezzle',
    location: 'Bangalore - Karnataka',
    country: 'India',
    empType: 'Full-time: Mid-Senior Level',
    salary: '12L - 15L',
    headCount: '500-600',
    skills: ['Python', 'SQL'],
    companyDescp: `Avanade is the leading provider of innovative digital and cloud services, 
                   business solutions and design-led experiences on the Microsoft ecosystem. 
                   Our professionals bring bold, fresh thinking combined with technology, 
                   business and industry expertise to help make a genuine human impact 
                   on our clients`,
    postedOn: '10 day ago',
    role: `At Sezzle, we are more than just brilliant engineers, passionate data enthusiasts, 
           out-of-the-box thinkers, and determined innovators, we are skilled musicians, yogis, 
           cyclists, chefs, boxers, dog-lovers, and rock-climbers`,
    rolesResp: `Lead and manage Sezzle’s current risk and fraud decisioning models
    Analyze and interpret the impact of various credit and risk strategies while working 
    under broader corporate goals Work as part of a cross-functional team of engineers, 
    product managers, and business /risk analysts to build data science solutions to 
    prevent credit risk and fraud
    Work closely with our data engineers to enhance our model deployment architecture`,
    needToHave: `4-6 years of relevant industry experience in data modeling, statistics, 
    credit, and fraud.
    Strong Knowledge of Python, SQL, R, Software engineering fundamentals
    Strong quantitative and problem-solving skills
    Hands On experience in Statistics/ML fundamentals and demonstrated experience in Python, R`,
    src: `https://media-exp1.licdn.com/dms/image/C4E0BAQEv2WrQrWZM-A/company-logo_100_100/0/1625685220831?e=1646265600&v=beta&t=nIB3P5ShqNjpK-saPONhwyeT6yhjsC16hQ4q8CqEcG0`,
  },
];

export const designations = [
  'Software Engineer',
  'Senior Software Engineer',
  'Associate Senior Software Engineer',
  'Associate Engineer',
  'Data Engineer',
  'Account Manager',
  'Full Stack Developer',
  'Data Scientist',
  'Senior Data Scientist',
  'Automation Engineer',
  'Lead Programmer',
];

export const skills = [
  'HTML',
  'React',
  'Java',
  'Python',
  'Java Script',
  'CPP',
  'CSS',
  'SASS',
  'SQL',
  'NodeJS',
  'Angular',
  'Vue',
];

export default jobProfiles;
