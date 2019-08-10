import React from 'react';

import Button from '../../components/button/Button.jsx';

import styles from './projectCard.module.css';

export default ({ title, category, technology, role, devDuration, links=[{ label: 'Details', path: '/' }, { label: 'Link', path: '' }] }) => (
  <div className={styles.root}>
    <h2>
      {title}
    </h2>
      <div className={styles.linkGroup}>
        {
          links.map((link) => (
            <Button disabled={!link.path} className={styles.link}>
              {link.label}
            </Button>
          ))
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