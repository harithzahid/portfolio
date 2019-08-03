import React from "react"

import PageWrapper from '../components/PageWrapper.jsx';
import { Link } from 'gatsby'

export default () => (
  <PageWrapper>
    <div>
      This is blog page. Back to home. <Link to="/">Home</Link>!
    </div>
  </PageWrapper>
)
