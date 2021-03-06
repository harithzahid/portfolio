import React from 'react';

import Button from '../../components/button/Button.jsx';

import styles from './projectCard.module.css';

export default ({ title, category, technology, role, devDuration, links=[{ label: 'Details', path: '' }, { label: 'Link', path: '' }] }) => (
  <div className={styles.root}>
    <h2>
      {title}
    </h2>
      <div className={styles.linkGroup} style={{ display: links.filter((link) => link.path).length || links.filter((link) => link.route).length ? 'flex' : 'contents' }}>
        {
          links.map((link) =>  (
            (link.path || link.route) && <Button className={styles.link} href={link.path} link={link.route} target="_blank">
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
      <span>Project Duration: </span>
      <span>{devDuration}</span>
    </div>
  </div>
)
