import React from 'react';
import ProjectCard from './ProjectCard.jsx';

import styles from './projects.module.css'

const items = [
  { 
    title: 'Construction Safety and Health Assessment System',
    category: 'Mobile App | Android',
    technology: 'React Native | Flux | Sqlite | .net',
    role: 'Front-end Developer',
    devDuration: '5 month',
  },
  {
    title: 'Training Management System',
    category: 'Web Application',
    technology: 'React.js | Flux | .net',
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
    title: 'Question & Answer Portal',
    category: 'Web Application | Own project | Serverless',
    technology: 'React.js | Redux | Node.js | PostgreSQL | AWS Lambda | Semantic UI',
    role: 'Full stack developer',
    devDuration: 'Ongoing',
  },
  {
    title: 'CMS & Web Portal',
    category: 'CMS | Web Portal',
    technology: 'React.js | Flux | .net',
    role: 'Front-end Developer',
    devDuration: '2 month',
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