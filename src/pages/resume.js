import React, { Component } from "react";
import { Document, Page } from "react-pdf";

import Button from '../components/button/Button.jsx';
import PageWrapper from '../components/page-wrapper/PageWrapper.jsx'
import PageHeader from '../components/page-header/PageHeader.jsx';
import PageFooter from '../components/page-footer/PageFooter.jsx';

import ResumePdf from '../../static/resume.pdf'

import styles from './resume.module.css';

export default class App extends Component {
  state = { numPages: null, pageNumber: 1, show: false };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages, show: true });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages, show } = this.state;

    return (
      <PageWrapper>
        <PageHeader />
        <div className={styles.root}>
          <div>
            <div className={styles.buttonGroup}>
              <Button className={styles.prevNextButton} disabled={!show || numPages > pageNumber} onClick={this.goToPrevPage}>{'<'}</Button>
              <Button className={styles.prevNextButton} disabled={!show || pageNumber >= numPages} onClick={this.goToNextPage}>{'>'}</Button>
              {
                show && (
                  <span>
                    Page {pageNumber} of {numPages}
                  </span>
                )
              }
            </div>
            <Button disabled={!show} className={styles.downloadBtn}>DOWNLOAD</Button>
          </div>
          <div className={styles.pdfWrapper}>
            <Document
              file={ResumePdf}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} width={700} />
            </Document>
          </div>
        </div>
        <PageFooter />
      </PageWrapper>
    );
  }
}