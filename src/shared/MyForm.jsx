import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form className="form-items"
        onSubmit={this.submitForm}
        action="https://formspree.io/xoqpqzga"
        method="POST"
      >
        <label>What's your name?</label>
        <input type="text" name="name" placeholder="What's your name?" />
        <label>What's your email?</label>
        <input type="email" name="email" placeholder="What's your email?" />
        <label>Leave a message!</label>
        <input className="message" type="text" name="message" placeholder="Leave a message!" />
        {status === "SUCCESS" ? <h4 className="sect-title">Thanks for your message! I'll be reaching out soon.</h4> : <button>Send!</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}