import React from "react"

import ProjectsLayout from "../components/projects/projectsLayout"
import CafeteriaBHP from "../components/projects/cafeteriaBHP"
import SumateALoVerde from "../components/projects/sumateALoVerde"
import Patrem from "../components/projects/patrem"
import ProyectoTitulo from "../components/projects/proyectoTitulo"
import Copec3d from "../components/projects/copec3d"
import ProjectsHeader from "../components/projects/projectsHeader"

const ProjectsIndex = () => (
  <ProjectsLayout>
    <div className="projects-index">
      <SumateALoVerde />
      {/* <CafeteriaBHP />
    <Patrem />
    <ProyectoTitulo />
    <Copec3d /> */}
    </div>
  </ProjectsLayout>
)

export default ProjectsIndex
