import classNames from 'classnames'
import { ReactNode } from 'react'
import { calcRem } from '../../utils/styles'

const FOREST_1_2x_MOBILE = '/background/bg_header_mobile@2x.jpg'
const FOREST_1_2x_DESKTOP = '/background/forest-1.jpg' // TODO: Add @2x version
// const FOREST_1_2x_MOBILE_WIDTH = 750
const FOREST_1_2x_MOBILE_HEIGHT = 1580 // Actual height: 1462
const FOREST_1_2x_DESKTOP_WIDTH = 1440 // TODO: Add @2x version
const FOREST_1_2x_DESKTOP_HEIGHT = 821 // TODO: Add @2x version

const FOREST_3_2x_MOBILE = '' // TODO: Add
const FOREST_3_2x_DESKTOP = 'forest-3.jpg' // TODO: Add @2x version

const FOX_2x_MOBILE = '/background/mobile_fox@2x.jpg'
const FOX_2x_DESKTOP = '/background/fox_footer@2x.jpg'

interface WithBackGroundImageProps {
  imageUrl: string
  children: ReactNode
  className?: string
}

interface WithBackGroundImageConstProps {
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

export function WithBackgroundForest1({
  children,
  className
}: WithBackGroundImageConstProps) {
  return (
    <div
      className={classNames(
        'background bg-no-repeat flex flex-col tablet:items-center w-full bg-stretch desktop:px-4',
        className
      )}
    >
      {children}
      <style jsx>{`
        .background {
          background-image: url('${FOREST_1_2x_MOBILE}')};
          // background-size: contain;
          background-size: 100% ${calcRem(FOREST_1_2x_MOBILE_HEIGHT / 2)};
        }
        
        @media (min-width: 640px) {
          .background {
            background-image: url('${FOREST_1_2x_DESKTOP}')};
          }
        }

        @media (min-width: ${calcRem(FOREST_1_2x_DESKTOP_WIDTH)}) {
          .background {
            background-size: 100% ${calcRem(FOREST_1_2x_DESKTOP_HEIGHT)};
          }
        }
      `}</style>
    </div>
  )
}

export function WithBackgroundFox({
  children,
  className
}: WithBackGroundImageConstProps) {
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
          background-image: url('${FOX_2x_MOBILE}')};
        }
        
        @media (min-width: 640px) {
          .background {
            background-image: url('${FOX_2x_DESKTOP}')};
          }
        }
      `}</style>
    </div>
  )
}
