import React, { useState, useEffect } from "react";
import './App.css';
import picture from './Nuno.png';
import bee from './Bee.png';
import fa from './FA.png';
import hd from './HD.png';
import iscte from './ISCTE-IUL.png';
import udemy from './Udemy.png';

function App() {

  //Parallax//
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //Parallax//

  return (
    <div className="App">
      <div className="header" style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
        <h1>Nuno Valente Antunes</h1>
        <a href="https://www.github.com/Nuno22"><h5>www.github.com/Nuno22</h5></a>
        <a href="https://www.linkedin.com/in/nuno-v-antunes"><h5>www.linkedin.com/in/nuno-v-antunes</h5></a>
      </div>


      <div className="main">
        <div className="right-side" style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
          <div>
            <br></br>
            <div className="image">
              <a href="https://www.linkedin.com/company/beeengineeringict/?originalSubdomain=pt"><img src={bee} alt="Bee_engineering"/> </a>
            </div>
            <h3>Junior DEV</h3>
            <h4>Fashion Social Platform</h4>
            <p>Contributed to a project that involved connecting Machine Learning to Social Network. <br></br>
            My responsibilities included researching and implementing Google Vision and Google ML tools. <br></br>
            The backend was developed in Spring (Java) and the frontend in React (Javascript)</p>
            <br></br>
          </div>
          <div>
            <div className="image">
              <a href="https://faurecia-aptoide.com/"><img src={fa} alt="Faurecia-Aptoide_Automotive"/></a>
            </div>
            <h3>QA Engineer</h3>
            <h4>Android Automotive Appstore</h4>
            <p>Designed test cases and test flows, performed functional testing and documented my findings. <br></br>
            Additionally, I created automated functions to process and analyze the data fed to the sales team, streamlining the process and increasing efficiency. <br></br>
            To conduct testing, I used tools like Postman, Android Studio, and Charles. <br></br>
            In addition, I wrote scripts in Python, Bash, and shell to enable some tests due to the lack of hardware. I also managed the hardware used for testing.</p>
            <br></br>
          </div>
          <div>
            <div className="image">
              <a href="https://www.hd.digital/en/"><img src={hd} alt="HD_by_metro"/></a>
            </div>
            <h3>QA Engineer</h3>
            <h4>Restaurant Management Platform</h4>
            <p>Wrote comprehensive test cases for the entire website test flow and ran automated tests. <br></br>
            I also checked the code's cleanliness in DataDog to ensure it met the required standards. <br></br>
            Lastly, I created extensive documentation to facilitate the development and maintenance of the project.</p>
            <br></br>
          </div>

          <ul className="tech-list">
            <div>
            <li>SCRUM</li>
            <li>JIRA</li>
            <li>CONFLUENCE</li>
            <li>POSTMAN</li>
            <li>SELENIUM</li>
            <li>CUCUMBER</li>
            </div>
            <div>
            <li>SQL</li>
            <li>GIT</li>
            <li>JAVA</li>
            <li>PYTHON</li>
            <li>BASH/SHELL</li>
            <li>JENKINS</li>
            </div>
            <br></br>
          </ul>

          <div className="image">
          <img src={udemy} alt="Udemy"/>
          </div>
          <div>
            <h4> <a href="https://www.udemy.com/course/rest-api-automation-testing-rest-assured">Rest API Testing (Automation)</a></h4>
            <br></br>
            <h4> <a href="https://www.udemy.com/course/selenium-real-time-examplesinterview-questions">Selenium WebDriver with Java</a></h4>          
            <br></br>
          </div>
        </div>
      </div>


      <div className="left-side">
        <div>
          <img src={picture} alt="my_picture"/>
        </div>
        <div>
          <p>As a curious and driven individual, I thrive on challenges, Im eager to learn and willing play different roles. 
            <br></br>I'm seeking a comprehensive understanding of the company and its operations, allowing me to identify areas where I can make meaningful contributions. 
            <br></br>At this stage in my career, I’m focused on improving my technical skills. </p>
          <br></br>
        </div>
        <div>
          <br></br>
          <h2>Skills</h2>
          <ul>
            <li>Designing Test Plans</li>
            <li>Documentation</li>
            <li>Comunication</li>
            <li>Automation</li>
            <li>Coding</li>
          </ul>
          <br></br>

          <br></br>
          <h2>Education</h2>
          <a href="https://www.iscte-iul.pt/"><img src={iscte} alt="ISCTE-IUL"/></a>
          <p>Computer Engineering</p>
          <br></br>

          <br></br>
          <h2>Language</h2>
          <p>Portuguese Native</p>
          <p>English Fluent</p>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default App;
