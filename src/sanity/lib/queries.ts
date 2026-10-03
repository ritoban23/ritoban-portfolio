import { groq } from 'next-sanity'
import { client } from './client'

// ── Profile ────────────────────────────────────────────────────────────────
const profileQuery = groq`*[_type == "profile"][0]{
  name, title, institution, institutionUrl, email, avatarUrl,
  heroDescription, beginnersMind, convergenceParagraph, aboutMeClosing,
  githubUsername, linkedinUsername, mediumUsername, scholarUrl, cvUrl, blogUrl
}`

// ── Work Experience ────────────────────────────────────────────────────────
const workQuery = groq`*[_type == "workExperience"] | order(order asc){
  company, href, title, location, logoUrl, start, end, isCurrentRole, description
}`

// ── Education ──────────────────────────────────────────────────────────────
const educationQuery = groq`*[_type == "education"] | order(order asc){
  school, href, degree, logoUrl, start, end
}`

// ── Projects ───────────────────────────────────────────────────────────────
const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(order asc){
  title, href, dates, description, technologies, imageUrl, category
}`

const allProjectsQuery = groq`*[_type == "project"] | order(order asc){
  title, href, dates, description, technologies, imageUrl, category
}`

// ── Publications ───────────────────────────────────────────────────────────
const featuredPublicationsQuery = groq`*[_type == "publication" && featured == true && category == "Research"] | order(order asc){
  year, conference, title, authors, tldr, paperUrl, codeUrl, category
}`

const allPublicationsQuery = groq`*[_type == "publication"] | order(order asc){
  year, conference, title, authors, tldr, paperUrl, codeUrl, category
}`

// ── Fetch helpers (with 60-second ISR revalidation) ───────────────────────
const opts = { next: { revalidate: 60 } }

export async function getProfile() {
  return client.fetch(profileQuery, {}, opts)
}

export async function getWork() {
  return client.fetch(workQuery, {}, opts)
}

export async function getEducation() {
  return client.fetch(educationQuery, {}, opts)
}

export async function getFeaturedProjects() {
  return client.fetch(featuredProjectsQuery, {}, opts)
}

export async function getAllProjects() {
  return client.fetch(allProjectsQuery, {}, opts)
}

export async function getFeaturedPublications() {
  return client.fetch(featuredPublicationsQuery, {}, opts)
}

export async function getAllPublications() {
  return client.fetch(allPublicationsQuery, {}, opts)
}
