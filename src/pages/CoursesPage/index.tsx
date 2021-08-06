import "./styles.css";
import useCourses from "../../hooks/useCourses";
import { Link } from "react-router-dom";

function CoursesPage() {
  const courses = useCourses();

  return (
    <div className="card-section">
      {courses.map((course) => (
        <Link to={`/cursos/${course.id}`}>
          <div className="card rgb">
            <div className="card-image card2">
              <img className="card-img" src={course.banner} alt="banner" />
            </div>
            <div className="card-text card2">
              <span className="date">1 week ago</span>
              <h2>{course.name}</h2>
              <p>{course.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CoursesPage;
