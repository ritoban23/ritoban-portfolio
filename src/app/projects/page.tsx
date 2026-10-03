import { ProjectsView } from "@/components/projects-view";
import { getAllProjects } from "@/sanity/lib/queries";

export const revalidate = 60; // ISR 60s

export default async function ProjectsPage() {
  let projects = null;

  try {
    projects = await getAllProjects();
  } catch (error) {
    console.error("Failed to fetch Sanity projects:", error);
  }

  return <ProjectsView projects={projects} />;
}
