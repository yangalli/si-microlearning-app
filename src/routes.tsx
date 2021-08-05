import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import CoursesPage from "./pages/CoursesPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={CoursesPage} path="/courses" />
      <Route component={LandingPage} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
