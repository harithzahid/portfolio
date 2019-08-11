import React, { PureComponent } from "react"

import PageHeader from '../page-header/PageHeader.jsx';
import PageFooter from '../page-footer/PageFooter.jsx';

import '../../utils/typography.module.css';
import styles from './pageWrapper.module.css';

export default class PageWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null
    }
  }

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

  render() {
    return (
      this.state.width && <div className={styles.root}>
        <div style={{ width: this.state.width, padding: '0 20px' }}>
          <PageHeader />
          <div style={{ minHeight: this.state.height - 479 }}>
            {this.props.children}
          </div>
          <PageFooter />
        </div>
      </div>
    )
  }
}
