import './App.css';
import picture from './Nuno.png';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Nuno Valente Antunes</h1>
        <p>www.github.com/Nuno22</p>
        <p>www.linkedin.com/in/nuno-v-antunes</p>
      </div>


      <div className="main">
        <div className="right-side">
          <div className="section">
            <h2>Junior DEV</h2>
            <h3>Fashion Social Platform</h3>
            <p>Contributed to a project that involved connecting Machine Learning to Social Network. My responsibilities included researching and implementing Google Vision and Google ML tools.The backend was developed in Spring (Java) and the frontend in React (Javascript)</p>
          </div>
          <div className="section">
            <h2>QA Engineer</h2>
            <h3>Android Automotive Appstore</h3>
            <p>Designed test cases and test flows, performed functional testing and documented my findings. Additionally, I created automated functions to process and analyze the data fed to the sales team, streamlining the process and increasing efficiency. To conduct testing, I used tools like Postman, Android Studio, and Charles. In addition, I wrote scripts in Python, Bash, and shell to enable some tests due to the lack of hardware. I also managed the hardware used for testing.</p>
          </div>
          <div className="section">
            <h2>QA Engineer</h2>
            <h3>Restaurant Management Platform</h3>
            <p>Wrote comprehensive test cases for the entire website test flow and ran automated tests. I also checked the code's cleanliness in DataDog to ensure it met the required standards. Lastly, I created extensive documentation to facilitate the development and maintenance of the project.</p>
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
          </ul>
        </div>
      </div>


      <div className="left-side">
        <div>
          <img src={picture} alt="my_picture"/>
        </div>
        <div>
          <p>As a curious and driven individual, I thrive on challenges, Im eager to learn and willing play different roles. I'm seeking a comprehensive understanding of the company and its operations, allowing me to identify areas where I can make meaningful contributions. At this stage in my career, I’m focused on improving my technical skills.</p>
        </div>
        <div>
          <h2>Skills</h2>
          <ul>
            <li>Designing Test Plans</li>
            <li>Documentation</li>
            <li>Comunication</li>
            <li>Automation</li>
            <li>Coding</li>
          </ul>

          <h2>Education</h2>
          <p>ISCTE-IUL</p>
          <p>Computer Engineering</p>

          <h2>Language</h2>
          <p>Portuguese Native</p>
          <p>English Fluent</p>
        </div>
      </div>
    </div>
  );
}

export default App;
