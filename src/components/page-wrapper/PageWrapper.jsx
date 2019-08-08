import React from "react"

import styles from './pageWrapper.module.css';

export default (props) => {
  return (
    <div className={styles.root}>
      {props.header}
      <div>
        {props.children}
      </div>
      {props.footer}
    </div>
  )
}