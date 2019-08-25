import React from "react"
import { Link } from 'gatsby'

import BlinkCircle from '../blink-circle/BlinkCircle.jsx';
import ButtonGroup from '../button/ButtonGroup.jsx';

import styles from './pageHeader.module.css';

const buttonItems = [
  { label: 'Projects', link: '/' },
  // { label: 'Blog', link: '/blog' },
  { label: 'Resume', link: '/resume/' },
  { label: 'Contact Me', link: '/contact-me/' }
]

const ButtonContent = (props) => (
  <span>{props.label}</span>
)

export default () => (
  <div className={styles.root}>
    <h1>Harith Zahid</h1>
    <div>
      I'm a passionate web/mobile app developer with a strong sense for aesthetics and user interaction. Javascript, React.js, React Native, Node.js, SQL
    </div>
    <div className={styles.forHire}>
      <BlinkCircle />
      <div>Available for hire</div>
    </div>
    <div>
      <ButtonGroup btnClassName={styles.btn} items={buttonItems} buttonContent={ButtonContent} />
    </div>
  </div>
)
