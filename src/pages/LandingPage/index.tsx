import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import "./styles.css";
import Header from "../../components/Header/index";
import api from "../../services/api";

interface Course {
  id: number;
  name: string;
  description: string;
}

function LandingPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  async function getCourses() {
    try {
      const { data } = await api.get("courses");
      setCourses(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCourses();
  }, []);

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
