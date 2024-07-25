import { PROJECTS } from "../../constants";
import ProjectCard from "../../../../components/ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="projects-section-wrapper">
      {PROJECTS.map((project) => {
        return (
          <ProjectCard
            title={project.title}
            techStack={project.techStack}
            projectType={project.projectType}
            desc={project.desc}
            key={project.id}
          />
        );
      })}
    </div>
  );
}
