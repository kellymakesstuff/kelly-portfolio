import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import resumeData from './resumeData'
import SingleResume from '../shared/SingleResume'
import china from "../images/china.png"
import egypt from "../images/egypt.png"
import france from "../images/france.png"
import japan from "../images/japan.png"
import korea from "../images/korea.png"
import spain from "../images/spain.png"
import uk from "../images/uk.png"



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


      <h3 className="resume-head">Education</h3>
      <div className="education-box">
        <h4><span className="sect-title">General Assembly | </span><span className="font-italic">Software Engineering Immersive</span></h4>
        <h4><span className="sect-title">Fairleigh Dickinson University | </span><span className="font-italic">MFA Writing (Fiction, Japanese Literary Translation)</span></h4>
        <h4><span className="sect-title">Binghamton University | </span><span className="font-italic">BA Linguistics, English (Dual Degree)</span></h4>
      </div>

      <h3 className="resume-head">Languages</h3>
      <div className="tech-stack-box">


        <img className="size-64" src={uk} alt="English"></img>
        <img className="size-80" src={japan} alt="Japanese"></img>
        <img className="size-64" src={france} alt="French"></img>
        <img className="size-80" src={china} alt="Chinese (Mandarin)"></img>
        <img className="size-80" src={korea} alt="Korean"></img>
        <img className="size-64" src={spain} alt="Spanish"></img>
        <img className="size-64" src={egypt} alt="Egyptian Arabic"></img>
      </div>
    </div>
  </>

}

export default withRouter(Resume)

