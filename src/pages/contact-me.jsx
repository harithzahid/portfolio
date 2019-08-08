import React from "react";

import PageWrapper from '../components/page-wrapper/PageWrapper.jsx';

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
      .then(() => alert("Success!"))
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
            <div style={{ display: 'flex' }} >
              <p>
                <label>
                  Your name:<br />
                <input style={{ marginRight: 10 }} type="text" name="name" onChange={this.handleChange}/>
                </label>
              </p>
              <p>
                <label>
                  Your email:<br />
                  <input type="email" name="email" onChange={this.handleChange}/>
                </label>
              </p>
            </div>
            <p>
              <label>
                Message:<br />
                <textarea style={{ width: '500px', height: '250px' }} name="message" onChange={this.handleChange}/>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </PageWrapper>
    );
  }
}
