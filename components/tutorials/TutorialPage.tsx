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

  useEffect(() => {
    const tuto = tutorials.find((t) => {
      return t.slug === slug
    })

    if (tuto != undefined) {
      setSelectedTutorial(tuto)
    }
  }, [slug])

  // Desired behavior:
  // 1 --> while it's loading: display an empty page
  // 2 --> after it's done loading, if it found something: display it
  // 3 --> after it's done loading, if it didn't find anything: display 404

  // TODO: condition does not work
  if (selectedTutorial.name !== '') {
    return (
      <div className="container mt-32">
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
          404 - Tutorials not found{' '}
        </div>
      </div>
    )
  }
}
