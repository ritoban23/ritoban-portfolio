'use client'

/**
 * This route renders the embedded Sanity Studio at /studio
 * Access it at ritoban.dev/studio — login with your Sanity account
 */
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
