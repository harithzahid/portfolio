import React from "react"
import { Link } from 'gatsby'

import PageWrapper from '../components/PageWrapper.jsx'
import BlinkCircle from '../components/BlinkCircle.jsx';

import styles from './index.module.css';

export default () => (
  <PageWrapper className={styles.root}>
    <h1>Harith Zahid</h1>
    <div>Harith aka 'Harris'. | Web/Mobile App developer | Javascript, React.js, React Native, Node.js, PostgreSQL | <Link to="/blog">more ...</Link></div>
    <div className={styles.forHire}>
      <BlinkCircle />
      <p>Available for hiring.</p>
    </div>
  </PageWrapper>
)
