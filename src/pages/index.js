import React from "react"

import PageWrapper from '../components/page-wrapper/PageWrapper.jsx'
import PageHeader from '../components/page-header/PageHeader.jsx';
import PageFooter from '../components/page-footer/PageFooter.jsx';
import Projects from './projects/Projects.jsx';

export default () => (
  <PageWrapper>
    <PageHeader />
    <Projects />
    <PageFooter />
  </PageWrapper>
)
