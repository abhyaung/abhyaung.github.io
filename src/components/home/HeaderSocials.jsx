import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home_socials">
        <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/SWZGVR3CSBBEQ1WG" className="home_social-link" target="_blank">
          <img 
                src="https://www.globalittraining.net/img/bc/AWS-Badge_Cloud-Practitioner.png" 
                alt="That was my aws badge"
                width={200} height={200}
                className="p-2" 
              />
        </a>

        <a href="https://github.com/abhyaung" className="home_social-link" target="_blank">
          <img 
                src="https://www.svgrepo.com/show/475654/github-color.svg" 
                alt="Github" 
                width={200} height={200} 
                className="p-2"
                
              />
        </a>

        <a href="https://leetcode.com/u/abhyaung/" className="home_social-link" target="_blank">
          <img 
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-leetcode-11492972-9325307.png" 
                alt="Leetcode" 
                width={200} height={200} 
                className="p-2"
              />
        </a>

        <a href="https://github.com/abhyaung/Swastha-Sanchar" className="home_social-link" target="_blank">
          <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg62Q1v2g8yJmiHZESKBKVoN4ojNFY15uOKLRzBDLfKz1-dD5T5ZkV7eRQ6GhThfsa0dxXnGb6rfsEf2oJgUiqtFOv9ud6NFQLgiXQhzEcfBb33Xu0nwXthW2L0uU_cahADwkPvarQJKH4/s0/image9.png" 
                alt="Google developer" 
                width={200} height={200} 
                className="p-2"
              />              
        </a>

        <a href={`${process.env.PUBLIC_URL}/Abhyaung-MastersDegree.pdf`} className="home_social-link" target="_blank">
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