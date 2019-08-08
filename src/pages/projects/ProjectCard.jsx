import React from 'react';
import { Link } from 'gatsby';

import styles from './projectCard.module.css';

export default ({ title, category, technology, role, devDuration, link }) => (
  <div className={styles.root}>
    <div>
      <h2>
        {title}
      </h2>
      {
        link && <div className={styles.link}><Link to={link}>DETAILS</Link></div>
      }
    </div>
    <div>
      <span>Category: </span>
      <span>{category}</span>
    </div>
    <div>
      <span>Technology: </span>
      <span>{technology}</span>
    </div>
    <div>
      <span>My Role: </span>
      <span>{role}</span>
    </div>
    <div>
      <span>Duration: </span>
      <span>{devDuration}</span>
    </div>
  </div>
)