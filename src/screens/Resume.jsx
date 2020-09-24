import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import resumeData from './resumeData'
import SingleResume from '../shared/SingleResume'

function Resume() {
  let [resumeItems, setResumeItems] = useState(resumeData)


  return <>
    <div className="col-10 resume-box">
      <a className="resume-link" target="_blank" href="https://drive.google.com/file/d/1ZiCI9Xgk1M4bobjqEC_JqJg-GApNoqbb/view?usp=sharing"><h4 className="font-italic" className="resume-head">Click to Download (PDF)</h4></a>
      <h3 className="resume-head">Tech Stack</h3>
      <div className="tech-stack-box">
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-html5-plain-wordmark colored"></i>
        <i class="devicon-react-original-wordmark colored"></i>
        <i class="devicon-jquery-plain-wordmark colored"></i>
        <i class="devicon-bootstrap-plain-wordmark"></i>
        <i class="devicon-sass-original colored"></i>
        <i class="devicon-ruby-plain-wordmark colored"></i>
        <i class="devicon-python-plain-wordmark colored"></i>
        <i class="devicon-postgresql-plain-wordmark colored"></i>
        <i class="devicon-rails-plain-wordmark colored"></i>
        <i class="devicon-nodejs-plain-wordmark colored"></i>
        <i class="devicon-express-original-wordmark colored"></i>
        <i class="devicon-mongodb-plain-wordmark colored"></i>
        <i class="devicon-heroku-original-wordmark colored"></i>
        <i class="devicon-npm-original-wordmark colored"></i>
        <i class="devicon-git-plain-wordmark colored"></i>
        <i class="devicon-photoshop-line colored"></i>
      </div>

      <h3 className="resume-head">Technical Experience</h3>
      <div className="tech-experience-box">
        {resumeItems.map(resumeItems => <SingleResume resumeItems={resumeItems} />)}
      </div>
    </div>

    <div>

    </div>



  </>

}

export default withRouter(Resume)

