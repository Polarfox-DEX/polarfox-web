import React, { ReactNode } from 'react'

interface FaqLinkProps {
  href: string
  newTab?: boolean
  children: ReactNode
}

export function FaqLink({ href, newTab, children }: FaqLinkProps) {
  return (
    <a
      href={href}
      target={newTab ? '_blank' : ''}
      rel="noopener noreferrer"
      className="hover:underline text-blue-light"
    >
      {children}
    </a>
  )
}
