import { ReactNode } from 'react'

interface SiteMapLinkProps {
  url: string
  children: ReactNode
}

export function SiteMapLink({ url, children }: SiteMapLinkProps) {
  return (
    <a className="hover:underline text-gray" href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
