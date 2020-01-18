import React from 'react';
import ProjectCard from './ProjectCard.jsx';

import styles from './projects.module.css'

const items = [
  {
    title: 'Insighttribe.co',
    category: 'Web Application | Serverless | Side project',
    technology: 'React.js | Redux | Node.js | Google Cloud Function | Postgresql',
    role: 'Founder | Full-stack Developer',
    devDuration: 'Ongoing',
    links: [
      { label: 'Link', path: 'https://insighttribe.co/' },
      { label: 'Code', path: 'https://github.com/harithzahid/uponinsight' }
    ]
  },
  {
    title: 'Construction Safety and Health Assessment System',
    category: 'Mobile App | Android | Internal system',
    technology: 'React Native | Flux | Sqlite | .net',
    role: 'Front-end Developer',
    devDuration: '5 month',
    links: [
      { label: 'Preview', route: '/media/shassic'  }
    ]
  },
  {
    title: 'Software House Landing Page',
    category: 'Landing Page',
    technology: 'React.js',
    role: 'Front-end Developer',
    devDuration: '1 month',
    links: [{ label: 'Link', path: 'http://taukala.com.my' }]
  },
  {
    title: 'Training Management System',
    category: 'Web Application | Internal system',
    technology: 'React.js | Flux | .net | | CSSnext',
    role: 'Project Manager | Front-end Developer',
    devDuration: '5 Month',
    links: [
      { label: 'Preview', route: '/media/tms'  }
    ]
  },
  {
    title: 'Carbon Reduction in Construction Assessment System',
    category: 'Web Application | Internal system',
    technology: 'React.js | Flux | .net',
    role: 'Front-end Developer',
    devDuration: '5 month',
    // links: [
    //   { label: 'Preview', route: '/media/myCRest'  }
    // ]
  },
  {
    title: 'Ecommerce Platform',
    category: 'Web & Mobile Application',
    technology: 'React.js | React Native',
    role: 'Front-end Developer',
    devDuration: 'Ongoing'
  }
]

export default () => (
  <div className={styles.root}>
    {
      items.map((item) => {
        return <ProjectCard {...item} />
      })
    }
  </div>
)
