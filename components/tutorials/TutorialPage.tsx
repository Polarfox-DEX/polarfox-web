import { calcRem } from '../../utils/styles'
import { tutorials } from './utils/TutorialExemple'
import React, { useState, useEffect } from 'react'
import { TutorialClass } from './utils/TutorialClass'
import ErrorPage from 'next/error'
import context from 'next'

interface TutorialPageProps {
  slug: string
}

export function TutorialPage({ slug }: TutorialPageProps) {
  const { res } = context

  const defaultTutorial: TutorialClass = new TutorialClass()

  const [selectedTutorial, setSelectedTutorial] = useState(defaultTutorial)
  const [hasLooked, setHasLooked] = useState(false)

  useEffect(() => {
    if (slug !== '') {
      const tuto = tutorials.find((t) => {
        return t.slug === slug
      })
  
      if (tuto != undefined) {
        setSelectedTutorial(tuto)
      }

      setHasLooked(true)
    }
  }, [slug])

  if (selectedTutorial.name !== '') {
    return (
      <div className="container mt-32 min-h-screen">
        <header className="container">
          <div
            className="opacity-50"
            style={{
              fontSize: calcRem(12),
              lineHeight: calcRem(14.1),
              letterSpacing: calcRem(3)
            }}
          >
            TUTORIAL
          </div>

          <div
            className="font-switzer font-semibold mt-1 pb-4"
            style={{
              fontSize: calcRem(50),
              lineHeight: calcRem(65)
            }}
          >
            {selectedTutorial.name}
          </div>

          <div className="container mb-6">
            <div className="mb-4">
              <div
                className="inline mr-8 "
                style={{
                  padding: '3px 12px',
                  backgroundColor: '#001937',
                  color: 'white',
                  borderRadius: '20px'
                }}
              >
                {selectedTutorial.type}
              </div>
              <span className="font-bold">reading time: </span>{' '}
              {selectedTutorial.readingTime} minutes
            </div>

            <div>
              <span style={{ color: '#1C67FE', fontWeight: 'bold' }}>By </span>
              <span style={{ color: '#4D6481' }}>
                {selectedTutorial.creator +
                  ' on ' +
                  selectedTutorial.creationDate.toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <img src={selectedTutorial.image} alt="tuturial image" />
          </div>

          <div>{selectedTutorial.content}</div>
        </header>
      </div>
    )
  } else if (!hasLooked) {
    return <div className="min-h-screen" />
  } else {
    return (
      <div className="container mt-32 pt-64">
        <div
          className="center-center"
          style={{
            textAlign: 'center',
            fontSize: calcRem(30),
            fontWeight: 'bold'
          }}
        >
          404 - Tutorial not found
        </div>
      </div>
    )
  }
}
