import React from 'react'

const AboutBox = () => {
  return (
    <div className="about_boxes grid">

        {/* Projects Completed */}
        <div className="about_box">
            <i className="about_icon icon-fire"></i>

            <div>
                <h3 className="about_title">6+</h3>
                <span className="about_subtitle">Projects Completed</span>
            </div>
        </div>

        {/* Skills learned */}
        <div className="about_box">
            <i className="about_icon icon-graduation"></i>

            <div>
                <h3 className="about_title">12+</h3>
                <span className="about_subtitle">Skills Learned</span>
            </div>
        </div>


        {/* GitHub Contributions */}
        <div className="about_box">
            <i className="about_icon icon-social-github"></i>

            <div>
                <h3 className="about_title">200+ Commits</h3>
                <span className="about_subtitle">GitHub Contributions</span>
            </div>
        </div>

        {/* Work/Internships */}
        <div className="about_box">
            <i className="about_icon icon-briefcase "></i>

            <div>
                <h3 className="about_title">1</h3>
                <span className="about_subtitle">Work/Internships</span>
            </div>
        </div>

    </div>
  )
}

export default AboutBox