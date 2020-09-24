import React from 'react'
import { withRouter } from 'react-router-dom'

function singleResume({ resumeItems }) {
  return <>
    <div className="single-resume-item">
      <h4><span className="sect-title">{resumeItems.company}, <span className="font-italic">{resumeItems.title} [{resumeItems.start} - {resumeItems.end}]</span></span></h4>
      <ul>{resumeItems.bullets.map(bullet => <li>{bullet}</li>)}</ul>
    </div>
  </>
}

export default withRouter(singleResume)
