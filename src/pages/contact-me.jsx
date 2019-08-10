import React from "react";

import PageWrapper from '../components/page-wrapper/PageWrapper.jsx';

import styles from './contact-me.module.css';

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then((res) => {
        this.setState({
          name: '',
          email: '',
          message: ''
        });
        alert('Success!')
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <PageWrapper>
        <div style={{ paddingTop: 40 }}>
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className={styles.inputGroup}>
              <input className={styles.input} value={this.state.name} placeholder="Name" style={{ marginRight: 10 }} type="text" name="name" onChange={this.handleChange}/>
              <input className={styles.input} value={this.state.email} placeholder="Email" type="email" name="email" onChange={this.handleChange}/>
              <textarea placeholder="Message" value={this.state.message} style={{ width: '100%', height: '250px' } } name="message" onChange={this.handleChange}/>
            </div>
            <div>
              <button className={styles.submit} type="submit">Send</button>
            </div>
          </form>
        </div>
      </PageWrapper>
    );
  }
}
