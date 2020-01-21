import React from "react"
import { Link } from 'gatsby'
import { Button, Icon } from 'semantic-ui-react'

import BlinkCircle from '../blink-circle/BlinkCircle.jsx';
import ButtonGroup from '../button/ButtonGroup.jsx';

import 'semantic-ui-css/components/button.min.css'
import 'semantic-ui-css/components/icon.min.css'

import styles from './pageHeader.module.css';

const buttonItems = [
  { label: 'Projects', link: '/' },
  // { label: 'Blog', link: '/blog' },
  { label: 'Resume', link: '/resume/' },
  { label: 'Email Me', link: '/contact-me/' }
]

const ButtonContent = (props) => (
  <span>{props.label}</span>
)

export default () => (
  <div className={styles.root}>
    <h1>Harith Zahid</h1>
    <div>
      I'm a web/mobile app developer with a strong sense for aesthetics and user interaction. Javascript, React.js, React Native, Node.js, SQL
    </div>
    <div className={styles.contact}>
      <div className={styles.forHire}>
        <BlinkCircle />
        <div style={{ marginTop: 2 }}>Available for hire</div>
      </div>
      <div>
        <a href="mailto:mharith.dev@gmail.com" target="_blank">
          <Button size="mini" icon>
            <Icon name='mail' />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/harith-zahid-885a95b7/" target="_blank">
          <Button size="mini" icon>
            <Icon name='linkedin' />
          </Button>
        </a>
        <a href="https://twitter.com/__resz" target="_blank">
          <Button size="mini" icon>
            <Icon name='twitter' />
          </Button>
        </a>
        <a href="https://www.facebook.com/rszhd" target="_blank">
          <Button size="mini" icon>
            <Icon name='facebook' />
          </Button>
        </a>
      </div>
    </div>
    <div>
      <ButtonGroup btnClassName={styles.btn} items={buttonItems} buttonContent={ButtonContent} />
    </div>
  </div>
)
