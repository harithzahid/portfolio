import React, { PureComponent } from 'react';
import Button from './Button.jsx'

import styles from './buttonGroup.module.css';

export default class ButtonGroup extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { buttonContent: ButtonContent } = this.props;
    return (
      <div className={styles.root}>
        {
          this.props.items.map((item) => (
            <Button link={item.link} className={this.props.btnClassName}>
              <ButtonContent {...item} />
            </Button>
          ))
        }
      </div>
    );
  }
}