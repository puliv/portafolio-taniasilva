import React from "react"

import ProjectsLayout from "../components/projects/projectsLayout"
import CafeteriaBHP from "./cafeteriaBHP"
import SumateALoVerde from "./sumateALoVerde"
import Patrem from "./patrem"
import ProyectoTitulo from "./proyectoTitulo"
import Copec3d from "./copec3d"
import ProjectsHeader from "../components/projects/projectsHeader"

const ProjectsIndex = () => (
  <ProjectsLayout>
    <ProjectsHeader />
    <div className="projects-index">
      <SumateALoVerde />
      <CafeteriaBHP />
      <Patrem />
      <ProyectoTitulo />
      <Copec3d />
    </div>
  </ProjectsLayout>
)

export default ProjectsIndex
