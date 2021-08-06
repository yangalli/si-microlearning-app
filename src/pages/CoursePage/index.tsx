import "./styles.css";
import useCourse from "../../hooks/useCourse";

function CoursePage() {
  const course = useCourse();

  return (
    <div className="row">
      <h2>{course?.name}</h2>
      <div className="row-posters">
        {course?.lessons?.map((lesson) => (
          // <div className="card rgb">
          //   <p>{lesson.name}</p>
          //   <p>{lesson.description}</p>
          // </div>
          <img
            key={lesson.id}
            className="row-poster row-posterLarge"
            src={lesson?.banner}
            alt={lesson?.name}
          />
        ))}
      </div>
    </div>
  );
}

export default CoursePage;
