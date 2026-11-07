import ProjectCard from './ProjectCard';
import { projects } from '../data';

export default function Projects() {
  return (
    <section data-aos="fade-up" id="projects" className="projects">
      <h2 className="heading-secondary">PROJECTS</h2>
      {projects.map((p) => (
        <ProjectCard key={p.name} {...p} />
      ))}
    </section>
  );
}
