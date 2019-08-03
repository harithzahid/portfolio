import React from "react"

import styles from './pageWrapper.module.css';

export default (props) => {
  return (
    <div className={styles.root}>
      <div className={props.className}>
        {props.children}
      </div>
    </div>
  )
}