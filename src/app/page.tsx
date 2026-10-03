import { HomeView } from "@/components/home-view";
import {
  getProfile,
  getWork,
  getEducation,
  getFeaturedProjects,
  getFeaturedPublications,
} from "@/sanity/lib/queries";

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export default async function Home() {
  let profile = null;
  let work = null;
  let education = null;
  let featuredProjects = null;
  let featuredPublications = null;

  try {
    [profile, work, education, featuredProjects, featuredPublications] =
      await Promise.all([
        getProfile(),
        getWork(),
        getEducation(),
        getFeaturedProjects(),
        getFeaturedPublications(),
      ]);
  } catch (error) {
    console.error("Failed to fetch Sanity data for Home:", error);
  }

  return (
    <HomeView
      profile={profile}
      work={work}
      education={education}
      featuredProjects={featuredProjects}
      featuredPublications={featuredPublications}
    />
  );
}
