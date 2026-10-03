import { PublicationsView } from "@/components/publications-view";
import { getAllPublications } from "@/sanity/lib/queries";

export const revalidate = 60; // ISR 60s

export default async function PublicationsPage() {
  let publications = null;

  try {
    publications = await getAllPublications();
  } catch (error) {
    console.error("Failed to fetch Sanity publications:", error);
  }

  return <PublicationsView publications={publications} />;
}
