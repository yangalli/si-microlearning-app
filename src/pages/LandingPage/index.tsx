import logo from "../../assets/images/logo.svg";
import "./styles.css";
import Header from "../../components/Header/index";
import useCourses from "../../hooks/useCourses";

function LandingPage() {
  const courses = useCourses();

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {courses.map((course) => (
            <div key={course.id}>
              <p>{course.name}</p>
            </div>
          ))}
        </a>
      </header>
    </div>
  );
}

export default LandingPage;
