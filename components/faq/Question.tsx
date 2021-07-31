import React, { ReactNode, useState } from 'react'
import { calcRem } from '../../utils/styles'

interface QuestionProps {
  question: string
  isOpenDefault?: boolean
  children: ReactNode
}

export function Question({ question, isOpenDefault, children }: QuestionProps) {
  const [isOpen, setIsOpen] = useState(isOpenDefault ?? false)

  return (
    <div className="question">
      <h3
        className={'flex justify-between py-3 font-bold'}
        style={{
          fontSize: calcRem(26),
          lineHeight: calcRem(50)
        }}
      >
        {question}
        <button
          className="pl-3"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          {isOpen ? '-' : '+'}
        </button>
      </h3>
      {isOpen && (
        <p className="mt-3 mb-8 text-gray" style={{ lineHeight: calcRem(30) }}>
          {children}
        </p>
      )}
      <style jsx>{`
        @media (min-width: 1200px) {
          .question {
            width: ${calcRem(780)};
          }
        }
      `}</style>
    </div>
  )
}
