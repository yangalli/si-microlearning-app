import "./styles.css";
import useCourses from "../../hooks/useCourses";

function CoursesPage() {
  const courses = useCourses();

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
