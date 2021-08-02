import classNames from 'classnames'
import Head from 'next/head'
import styles from '../styles/Page.module.css'
import { Footer } from './Footer'
import { Header } from './Header'
import { PresaleHeader } from './PresaleHeader'
import React, { ReactNode, useState } from 'react'

interface PageProps {
  children: ReactNode
}

export function Page({ children }: PageProps) {
  const displayPresale = false

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div
      className={classNames(
        styles.container,
        'text-blue',
        {
          'pt-28': displayPresale
        },
        {
          'h-screen overflow-hidden': isMobileMenuOpen
        }
      )}
    >
      <Head>
        <title>Polarfox</title>
        <meta name="description" content="Polarfox | Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </Head>

      {displayPresale && <PresaleHeader className="-mt-28" />}
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      {children}

      <Footer className="mt-10" />
    </div>
  )
}
