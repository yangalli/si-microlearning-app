import { useState, useEffect } from "react";
import "./styles.css";
import api from "../../services/api";

interface Course {
  id: number;
  name: string;
  description: string;
}

function CoursesPage() {
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
    <div className="card-section">
      {courses.map((course) => (
        <div className="card rgb">
          <div className="card-image card2"></div>
          <div className="card-text card2">
            <span className="date">1 week ago</span>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursesPage;
