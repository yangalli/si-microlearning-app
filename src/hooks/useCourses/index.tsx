import { useState, useEffect } from "react";
import Course from "../../types/Course";
import api from "../../services/api";

function useCourses(): Array<any> {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function getCourses() {
      try {
        const { data } = await api.get("courses");
        setCourses(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getCourses();
  }, []);

  return courses;
}

export default useCourses;
