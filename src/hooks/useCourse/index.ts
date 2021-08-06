import { useState, useEffect } from "react";
import Course from "../../types/Course";
import api from "../../services/api";
import { AxiosResponse } from "axios";
import { useParams } from "react-router";

type Params = {
  courseId: string;
};

function useCourse() {
  const [course, setCourse] = useState<Course>();
  const { courseId } = useParams<Params>();

  useEffect(() => {
    function getCourseById(courseId: string): Promise<AxiosResponse<Course>> {
      return api.get(`/courses/${courseId}`);
    }

    async function getCourse() {
      try {
        const { data } = await getCourseById(courseId);
        setCourse(data);
      } catch (error) {
        console.log("Erro ao carregar página");
      }
    }

    getCourse();
  }, [courseId]);

  return course;
}

export default useCourse;
