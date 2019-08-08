import React from "react"
import { Link } from 'gatsby'

import PageWrapper from '../components/page-wrapper/PageWrapper.jsx';

export default () => (
  <PageWrapper>
    <div>
      This is blog page. Back to home. <Link to="/">Home</Link>!
    </div>
  </PageWrapper>
)
