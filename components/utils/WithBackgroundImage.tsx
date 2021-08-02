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

interface WithBackgroundImageFoxProps {
  children: ReactNode
  className?: string
}

export function WithBackgroundImageFox({
  children,
  className
}: WithBackgroundImageFoxProps) {
  const FOX_MOBILE = '/background/mobile_fox@2x.jpg'
  const FOX_DESKTOP = '/background/fox_footer@2x.jpg'

  return (
    <div
      className={classNames(
        'background bg-no-repeat flex flex-col w-full bg-bottom-40-vw bg-100% tablet:bg-bottom tablet:bg-cover tablet:items-center desktop:px-4 mt-10',
        className
      )}
    >
      {children}
      <style jsx>{`
        .background {
          background-image: url('${FOX_MOBILE}')};
        }
        
        @media (min-width: 640px) {
          .background {
            background-image: url('${FOX_DESKTOP}')};
          }
        }
      `}</style>
    </div>
  )
}
