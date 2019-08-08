import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';

import styles from './button.module.css';

export default (props) => (
  props.link ? (
    <Link
      to={props.link}
      className={classnames(styles.root, props.className)}
      activeClassName={classnames(styles.root, styles.active)}
    >
      {props.children}
    </Link>
  ) : (
    <div onClick={props.onClick} className={classnames(styles.root, styles.small, props.className, props.disabled && styles.disable)}>
      {props.children}
    </div>
  )
)