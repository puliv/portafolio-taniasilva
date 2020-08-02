import React from "react"
import PropTypes from "prop-types"
import ProjectsHeader from "./projectsHeader"

const ProjectsLayout = ({ children }) => {
  return (
    <>
      <ProjectsHeader />
      <div className="projects-layout">
        <main>{children}</main>
      </div>
    </>
  )
}

ProjectsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectsLayout
