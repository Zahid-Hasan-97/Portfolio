import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Skills from './Skills/Skills';
import Home from './Home/Home';
import AnimatedCursor from 'react-animated-cursor';
import Projects from './Projects/Projects';
import ProjectDetails from './Projects/ProjectDetails';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import AboutMe from './About Me/AboutMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: 'aboutMe',
    element: <AboutMe></AboutMe>
  },
  {
    path: "skill",
    element: <Skills></Skills>
  },
  {
    path: "projects",
    element: <Projects></Projects>
  },
  {
    path: "projects/:projectId",
    element: <ProjectDetails></ProjectDetails>
  },
  {
    path: "education",
    element: <Education></Education>
  },
  {
    path: 'contact',
    element: <Contact></Contact>
  },
  {
    path: "footer",
    element: <Footer></Footer>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatedCursor
      innerSize={8}
      outerSize={30}
      color="69, 180, 255"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={['a', 'button', '.link']}
    ></AnimatedCursor>
    <RouterProvider router={router} />
  </StrictMode>,
)
