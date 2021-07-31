import { calcRem } from '../../utils/styles'
import { TutorialInterface } from './utils/TutorialInterface'
import { tutorials } from './utils/TutorialExemple'
import React, { useState, useEffect } from 'react'
import { TutorialTypes } from './utils/TutorialTypesEnum'

interface TutorialPageProps {
  slug: string
}

export function TutorialPage({ slug }: TutorialPageProps) {
  const defaultTutorial = {
    slug: '',
    type: TutorialTypes.BASICS,
    tileImage: '',
    image: '',
    name: '',
    isVideo: false
  }

  const [selectedTutorial, setSelectedTutorial] = useState(defaultTutorial)

  useEffect(() => {
    const tuto = tutorials.find((t) => {
      return t.slug === slug
    })

    console.log('Slug', slug)

    if (tuto != undefined) {
      setSelectedTutorial(tuto)
    }
  }, [slug])

  // Desired behavior:
  // 1 --> while it's loading: display an empty page
  // 2 --> after it's done loading, if it found something: display it
  // 3 --> after it's done loading, if it didn't find anything: display 404

  // TODO: condition does not work
  if (selectedTutorial != defaultTutorial) {
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
            className="font-switzer font-semibold mt-1"
            style={{
              fontSize: calcRem(50),
              lineHeight: calcRem(65)
            }}
          >
            {selectedTutorial.name}
          </div>
        </header>
      </div>
    )
  } else {
    console.log('Tutorial not found!')
    return <div>Tutorial not found!</div>
  }
}
