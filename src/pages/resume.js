import React, { Component } from "react";
import { Document, Page } from "react-pdf";

import Button from '../components/button/Button.jsx';
import PageWrapper from '../components/page-wrapper/PageWrapper.jsx'

import ResumePdf from '../../static/resume.pdf'

import styles from './resume.module.css';

export default class App extends Component {
  state = { 
    numPages: null,
    pageNumber: 1,
    show: false,
    width: null,
    height: null
  };
  myRef = React.createRef();

  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages, show: true });
  };

  goToPrevPage = () => {
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    window.scrollTo({
      top: this.myRef.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  goToNextPage = () => {
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
    window.scrollTo({
      top: this.myRef.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    const { pageNumber, numPages, show } = this.state;
    const fileUrl = 'https://drive.google.com/uc?authuser=0&id=1a9V0yI9zF-E3aTqDt-NJcKwJt-Nfo4UD&export=download '
    
    return (
      this.state.width && <PageWrapper>
        <div className={styles.root}>
          <div ref={this.myRef}>
            <Button disabled={!show} className={styles.downloadBtn} href={fileUrl} target="_blank">DOWNLOAD</Button>
          </div>
          <div className={styles.pdfWrapper} style={{ minHeight: this.state.height - 479 - 65 - 45 }}>
            <Document
              file={ResumePdf}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} width={this.state.width > 720 ? 700 : this.state.width - 20} />
            </Document>
          </div>
          <div className={styles.buttonGroup}>
            <Button className={styles.prevNextButton} disabled={!show || numPages > pageNumber} onClick={this.goToPrevPage}>{'<'}</Button>
            <Button className={styles.prevNextButton} disabled={!show || pageNumber >= numPages} onClick={this.goToNextPage}>{'>'}</Button>
          </div>
        </div>
      </PageWrapper>
    );
  }
}