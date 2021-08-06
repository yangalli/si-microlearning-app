import Lesson from "./Lesson";
export default interface Course {
  id: number;
  name: string;
  description: string;
  banner: string;
  lessons?: Lesson[];
}
