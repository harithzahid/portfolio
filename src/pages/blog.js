import React from "react"
import { Link } from 'gatsby'

import PageWrapper from '../components/page-wrapper/PageWrapper.jsx';
import PageHeader from '../components/page-header/PageHeader.jsx';

export default () => (
  <PageWrapper>
    <PageHeader />
    <div>
      This is blog page. Back to home. <Link to="/">Home</Link>!
    </div>
  </PageWrapper>
)
