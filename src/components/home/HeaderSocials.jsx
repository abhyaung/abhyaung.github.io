import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home_socials">

        <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/6a887880bc9a490c8d44d8a1926b19d0" className="home_social-link" target="_blank" rel="noopener noreferrer">
          <img 
                src="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" 
                alt="AWS certification badge"
                width={200} height={200}
                className="p-2" 
              />
        </a>


        <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/SWZGVR3CSBBEQ1WG" className="home_social-link" target="_blank" rel="noopener noreferrer">
          <img 
                src="https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" 
                alt="AWS certification badge"
                width={200} height={200}
                className="p-2" 
              />
        </a>

        <a href="https://github.com/abhyaung" className="home_social-link" target="_blank" rel="noopener noreferrer">
          <img 
                src="https://www.svgrepo.com/show/475654/github-color.svg" 
                alt="Github" 
                width={200} height={200} 
                className="p-2"
                
              />
        </a>

        <a href={`${process.env.PUBLIC_URL}/Abhyaung-MastersDegree.pdf`} className="home_social-link" target="_blank" rel="noopener noreferrer">
          <img 
                src="https://i.pinimg.com/736x/68/e9/00/68e9004082fbd80d89c41bda980469d3.jpg" 
                alt="Pace University" 
                width={200} height={200} 
                className="p-2"
              />  
        </a>
    </div>
  )
}

export default HeaderSocials