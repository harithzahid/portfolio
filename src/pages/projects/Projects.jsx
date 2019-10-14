import React from 'react';
import ProjectCard from './ProjectCard.jsx';

import styles from './projects.module.css'

const items = [
  { 
    title: 'Question & Answer Platform',
    category: 'Web Application | Serverless | Personal project',
    technology: 'React.js | Redux | Node.js | Google Cloud SQL & Function',
    role: 'Project owner | Full stack developer',
    devDuration: 'Ongoing',
    links: [{ label: 'Link', path: 'https://uponinsight-web.firebaseapp.com/' }, { label: 'Code', path: 'https://github.com/harithzahid/uponinsight' }]
  },
  {
    title: 'Construction Safety and Health Assessment System',
    category: 'Mobile App | Android',
    technology: 'React Native | Flux | Sqlite | .net',
    role: 'Front-end Developer',
    devDuration: '5 month',
  },
  {
    title: 'Responsive Landing Page For Software House',
    category: 'Landing Page',
    technology: 'React.js',
    role: 'Front-end Developer',
    devDuration: '1 month',
    links: [{ label: 'Link', path: 'http://taukala.com.my' }]
  },
  {
    title: 'Training Management System',
    category: 'Web Application',
    technology: 'React.js | Flux | .net | | CSSnext',
    role: 'Project Manager | Front-end Developer',
    devDuration: 'Ongoing',
  },
  { 
    title: 'Carbon Reduction in Construction Assessment System',
    category: 'Web Application',
    technology: 'React.js | Flux | .net',
    role: 'Front-end Developer',
    devDuration: '5 month'
  },
  {
    title: 'CMS & Web Portal',
    category: 'CMS | Web Portal',
    technology: 'React.js | Flux | .net',
    role: 'Front-end Developer',
    devDuration: '2 month',
    links: [{ label: 'Link', path: 'http://sustainability.cidbec.com.my/' }]
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