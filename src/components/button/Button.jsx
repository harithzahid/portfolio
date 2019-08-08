import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';

import styles from './button.module.css';

export default ({ link, className, children, disabled, ...props}) => (
  link ? (
    <Link
      to={link}
      className={classnames(styles.root, className)}
      activeClassName={classnames(styles.root, styles.active)}
    >
      {children}
    </Link>
  ) : (
    <a
      onClick={props.onClick}
      className={classnames(styles.root, className, disabled && styles.disable)}
      {...props}
    >
      {children}
    </a>
  )
)