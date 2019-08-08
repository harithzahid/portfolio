import React from "react"
import { Link } from 'gatsby'

import BlinkCircle from '../blink-circle/BlinkCircle.jsx';
import ButtonGroup from '../button/ButtonGroup.jsx';

import styles from './pageHeader.module.css';

const buttonItems = [
  { label: 'Projects', link: '/' },
  // { label: 'Blog', link: '/blog' },
  { label: 'Resume', link: '/resume' },
  { label: 'Contact Me', link: '/contact-me' }
]

const ButtonContent = (props) => (
  <span>{props.label}</span>
)

export default () => (
  <div className={styles.root}>
    <h1>Harith Zahid</h1>
    <div>Harith aka 'Harris'. | Web/Mobile App developer | Javascript, React.js, React Native, Node.js, PostgreSQL | <Link to="/blog">more ...</Link></div>
    <div className={styles.forHire}>
      <BlinkCircle />
      <div>Available for hire</div>
    </div>
    <div>
      <ButtonGroup btnClassName={styles.btn} items={buttonItems} buttonContent={ButtonContent} />
    </div>
  </div>
)
