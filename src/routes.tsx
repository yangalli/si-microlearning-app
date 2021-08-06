import { Route, BrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import CoursesPage from "./pages/CoursesPage";
import CoursePage from "./pages/CoursePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={CoursePage} path="/cursos/:courseId" exact />
      <Route component={CoursesPage} path="/todos-cursos" exact />
      <Route component={LandingPage} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
