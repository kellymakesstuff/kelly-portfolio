import React from 'react'
import { withRouter } from 'react-router-dom'
import MyForm from '../shared/MyForm'
import mail from '../images/mail.png'


function Contact() {
  return <>

    <div className="contact-box">

      <div className="tech-stack-box">
        <a href="mailto:bergkma@gmail.com"><img alt="bergkma@gmail.com" src={mail} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kellymakesstuff/"><i class="devicon-github-plain-wordmark colored"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kelly-b-b07b2980/"><i class="devicon-linkedin-plain colored"></i></a>
      </div>

      <h2>Drop a line to work together, hire me, or just say hi!</h2>
      <MyForm />
    </div>



  </>


}

export default withRouter(Contact)