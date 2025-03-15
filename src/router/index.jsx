import React from 'react'
import App from '../App'
// import Home from '../pages/Home'
import HomePage from '../pages/Homepage'
import AboutPage from '../pages/Aboutpage'
import SkillsPage from '../pages/SKillspage'
import ProjectsPage from '../pages/Projectspage'
import TestimonialsPage from '../pages/Testiminialspage'
import ContactPage from '../pages/Contactpage'
import Experience from '../pages/Experience'
import ExperiencePage from '../pages/Testiminialspage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="skills" element={<SkillsPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      {/* <Route path="testimonials" element={<TestimonialsPage />} /> */}
      {/* <Route path="experience" element={<ExperiencePage />} /> */}
      <Route path="experience" element={<Experience />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  )
)

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
