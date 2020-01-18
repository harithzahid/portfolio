import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';

import styles from './button.module.css';

export default ({ link, style, className, children, disabled, ...props}) => (
  link ? (
    <Link
      to={link}
      className={classnames(styles.root, className)}
      activeClassName={classnames(styles.root, styles.active)}
      style={style}
    >
      {children}
    </Link>
  ) : (
    <a
      onClick={props.onClick}
      className={classnames(styles.root, className, disabled && styles.disable)}
      style={style}
      {...props}
    >
      {children}
    </a>
  )
)
