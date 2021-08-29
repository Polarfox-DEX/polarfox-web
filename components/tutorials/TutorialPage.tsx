import { calcRem } from '../../utils/styles'
import { tutorials } from './utils/TutorialExample'
import React, { useState, useEffect } from 'react'
import { TutorialClass } from './utils/TutorialClass'
import classNames from 'classnames'

export function TutorialPage({ slug, className }: any) {
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
      <div className={classNames('container min-h-screen', className)}>
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
        <div className="mb-6 text-blue space-y-4">
          <div
            className="inline mr-8 px-3 text-white py-1 bg-blue rounded-2x1"
            style={{
              borderRadius: calcRem(20)
            }}
          >
            {selectedTutorial.type}
          </div>
          <span className="font-bold">reading time: </span> {selectedTutorial.readingTime} minutes
          <div>
            <span className="text-blue-light font-bold">By {selectedTutorial.creator} </span>
            <span className="text-gray">{'on ' + selectedTutorial.creationDate.toLocaleDateString()}</span>
          </div>
        </div>
        <img className="mb-8" src={selectedTutorial.image} alt="image" />
        {selectedTutorial.content}
      </div>
    )
  } else if (!hasLooked) {
    return <div className="min-h-screen" />
  } else {
    return (
      <div
        className="container grid items-end justify-center font-bold min-h-40% text-center"
        style={{
          fontSize: calcRem(30)
        }}
      >
        404 - Tutorial not found
      </div>
    )
  }
}
