const Resume = () => {
    return (
      <div className="myResumeWrapper">
        <nav>
          <ul className="returnHome">
            <a href="./" style={{ color: "white" }}>
              Return To Home Page
            </a>
          </ul>
        </nav>
        <h1 className="myResume">My Resume</h1>
        <br />
        <div className="mainWrapper2">
          <div className="myResumeContent">
            <h1 className="name">Ashley Brooks</h1>
            <h2>
              3690 E Stampedee Gilbert, AZ 85297 <br />
              Phone: 480-324-6226 | Email:<span className="email"> a.brooks9385@gmail.com</span> <br />
              Portfolio: <span className="email">https://github.com/ashleyCodie/My-Portfolio
              </span> <br />
              GitLab:  <span className="email">http://gitlab.perryville.perseverenow.org/abrooks</span> <br />
              LinkedIn:  <span className="email">www.linkedin.com/in/ashley-brooks-257778362 </span>
            </h2>
            <br />
            <br />
          </div>
        </div>
  
        <div className="mainWrapper2">
          <div className="aboutWrapper">
            <div className="aboutText">
            <h4 className="objective">OBJECTIVE</h4>
            <br />
              <p>
                {" "}
                Full Stack Web Developer providing unique perspectives on how end-users interact with websites and software platforms. 
                Earned a certificate in Full Stack Web Development from Persevere Coding Program. Innovative problem-solver who is passionate 
                about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, troubleshooting,
                 problem solving, and building projects from idealization to execution.
              </p>
            </div>
          </div>
        </div>
        <div className="mainWrapper2">
          <div className="techWrapper">
            <div className="aboutTech">
              <h4 className="techSkills">TECHNICAL SKILLS</h4>
              <br />
              <p>
              React, Javascript, React State, Redux, RTK, Vite, Recharts, Faker <br />
              HuggingFace.JS, HuggingFace Inference <br />
              Node, Express, Passport, Socket.IO, Argon2, Crypto, Cors, JWT <br />
              TailwindCSS, Bootstrap, Bootstrap-Icons, Font Awesome, Heroicons, SASS <br /> 
              Mongoose, MongoDB <br />
              GitHub, GitLab, GitLab Issues, Thunder Client,
                <br />
              </p>
            </div>
          </div>
        </div>
  
        <div className="mainWrapper2">
          <div className="techWrapper">
            <div className="aboutTech">
              <h4 className="techSkills">EDUCATION</h4>
              <br />
              <p>
                <span>Persevere Coding Program:</span> Goodyear, AZ
                <br />
                <span>Dates:</span> November 8, 2023 - December 20, 2024
                <br />
                Cerifaction in Full Stack Web Development
                <br />
              </p>
            </div>
          </div>
        </div>
  
        <div className="mainWrapper2">
          <div className="techWrapper">
            <div className="aboutTech">
              <h4 className="techSkills">EMPLOYMENT:</h4>
              <br />
              <p><span >Company:</span>
                <span className="companyName"> Persevere Now</span> <br />
                <span>Title:</span> Full Stack Developer <br />
                <span>Dates:</span> December 21, 2024 - Current <br />
                <span>Description:</span> Collaboration with a team of web developers to create a Donor Database for Persevere's non-profit oraganization to 
                keep track of their donors, voluteers, prospects for new donors, and calculate the amount of donations received. Created charts using Recharts to show how much is being donated each year and who the 
                donations are coming from. 
                <br />
              </p>
              <br />
             
           
            </div>
          </div>
        </div>
  
  
        <div className="mainWrapper2">
          <div className="techWrapper">
            <div className="aboutTech">
              <h4 className="techSkills">OTHER CERTIFICATIONS RECEIVED:</h4>
              <br />
              <p>
                Computer Basics <br />
                Computer Skills and Literacy <br />
                MERN Essential Training <br />
                Unlock Code Camp <br />
                Bootstrap 5 Essential Training <br />
                Computer Science Principles: Programming <br />
                JavaScript as a Second Language
                <br />
              </p>
            </div>
          </div>
        </div>
  
        <div className="mainWrapper2">
          <div className="techWrapper">
            <div className="aboutTech">
              <nav>
                <ul className="returnHome">
                  <a href="./" style={{ color: "black" }}>
                    Return To Home Page
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resume;