import classNames from 'classnames'
import { ReactNode } from 'react'
import { calcRem } from '../../utils/styles'

interface WithBackGroundImageProps {
  imageUrl: string
  children: ReactNode
  className?: string
}

export function WithBackgroundImage({
  imageUrl,
  children,
  className
}: WithBackGroundImageProps) {
  return (
    <div
      className={classNames(
        'bg-cover bg-no-repeat flex flex-col justify-center items-center',
        className
      )}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {children}
    </div>
  )
}

interface WithBackGroundImageStretchProps {
  imageUrl: string
  imageWidth: number
  imageHeight: number
  minWidth?: number
  children: ReactNode
  className?: string
}

export function WithBackgroundImageStretch({
  imageUrl,
  imageWidth,
  imageHeight,
  minWidth,
  children,
  className
}: WithBackGroundImageStretchProps) {
  console.log(`url('${imageUrl}')`)
  return (
    <div
      className={classNames(
        'background bg-no-repeat flex flex-col tablet:items-center w-full bg-stretch desktop:px-4',
        className
      )}
    >
      {children}
      <style jsx>{`
        @media (min-width: ${calcRem(minWidth ?? 0)}) {
          .background {
            background-image: url('${imageUrl}')};
          }
        }

        @media (min-width: ${calcRem(imageWidth)}) {
          .background {
            background-size: 100% ${calcRem(imageHeight)};
          }
        }
      `}</style>
    </div>
  )
}

export function WithBackgroundImageFox({
  imageUrl,
  children,
  className
}: WithBackGroundImageProps) {
  console.log(`url('${imageUrl}')`)
  return (
    <div
      className={classNames(
        'bg-no-repeat flex flex-col w-full bg-contain bg-bottom tablet:bg-top tablet:items-center tablet:bg-cover desktop:bg-bottom-28-vw desktop:px-4',
        className
      )}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {children}
    </div>
  )
}
