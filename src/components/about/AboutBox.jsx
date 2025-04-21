import React from 'react'

const AboutBox = () => {
  return (
    <div className="about_boxes grid">

        {/* Projects Completed */}
        <div className="about_box">
            <i className="about_icon icon-fire"></i>

            <div>
                <h3 className="about_title">22</h3>
                <span className="about_subtitle">Projects Completed</span>
            </div>
        </div>

        {/* Coffee Cups */}
        <div className="about_box">
            <i className="about_icon icon-cup"></i>

            <div>
                <h3 className="about_title">2000</h3>
                <span className="about_subtitle">Cup of coffee</span>
            </div>
        </div>

        {/* Coffee Cups */}
        <div className="about_box">
            <i className="about_icon icon-cup"></i>

            <div>
                <h3 className="about_title">2000</h3>
                <span className="about_subtitle">Cup of coffee</span>
            </div>
        </div>

        {/* Coffee Cups */}
        <div className="about_box">
            <i className="about_icon icon-cup"></i>

            <div>
                <h3 className="about_title">2000</h3>
                <span className="about_subtitle">Cup of coffee</span>
            </div>
        </div>

    </div>
  )
}

export default AboutBox