import React from "react"
import {useNavigate} from "react-router-dom"
import code1 from "../../assets/images/code1.png"
import code6 from "../../assets/images/code6.png"




const Home = () => {
  let navigate=useNavigate()

    return (
        <div className="myBody">
        <div className="container">
  
          <div className="navWrapper">
        <div className="innerContainer">
              <div className="divider">
  
              </div>
              <div className="navContent">
                <p>
              <img src={code6} className="code6" alt="code6" />
              </p>
                <ul className="navLinks">
                <a href="./" style={{color: "white"}}>Home</a>
                  <br />
                  <br />
                  <a href="./Resume" style={{color: "white"}}>Resume</a>
                  <br />
                  <br />
                  <a href="./Portfolio" style={{color: "white"}}>Portfolio</a>
                  <br />
                  <br />
                  <a href="./ContactMe" style={{color: "white"}}>Contact Me</a>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="mainWrapper">
          <div className="greetingWrapper">
            <div className="greeting">
              <p> Hi, I'm</p>
              <h1 className="myName">Ashley <br /> Brooks</h1>
              <hr className="purpleLine" />
              <h4 className="techDev">Full Stack Developer</h4>
            </div>
            <div className="myImage">
              <img src={code1} className="code1" alt="code1" />
            </div>
          </div>
  
  
          <div className="assetsWrapper">
            <div className="resume"><button className="resumeBtn" onClick={()=> navigate("./Resume")}>Resume</button></div>
            <div className="portfolio"><button className="portfolioBtn" onClick={() => navigate("./Portfolio")}>Portfolio</button></div>
          </div>
  
          <div className="mainWrapper2">
            <div className="aboutWrapper">
              <div className="aboutText">
                <h2>About Me</h2>
                <hr className="purpleLine2" />
                <p> MERN Full Stack Web Developer ready to provide unique perspectives on how end-users
                  interact with websites and software platforms. Earned a certificate in Full Stack
                  Web Development from Persevere Coding Program. Innovative problem-solver who is
                  passionate about developing applications with a focus on mobile-first design and development.
                  I'm familiar with serveral different coding languages and libraries such as: Javascript, React, Redux, RTK, Vite,
                  Faker, Node, Bootstrap,  Argon2, Express, Cors, Axios, GitLab, 
                  Faker, Font Awesome, TailwindCSS, Passport, Socket.IO, Mongoose, MongoDB,
                  and many more. Strengths in creativity, teamwork, troubleshooting, problem-solving, and building
                  projects from ideation to execution. </p>
              </div>
            </div>
          </div>
  
          </div>
        </div>
  
  
    </div>
    )
}

export default Home