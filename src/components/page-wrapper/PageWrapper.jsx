import React from "react"

import PageHeader from '../page-header/PageHeader.jsx';
import PageFooter from '../page-footer/PageFooter.jsx';

import styles from './pageWrapper.module.css';

export default (props) => {
  return (
    <div className={styles.root}>
      <div>
        <PageHeader />
        <div style={{ minHeight: window.innerHeight - 479 }}>
          {props.children}
        </div>
        <PageFooter />
      </div>
    </div>
  )
}