import classNames from 'classnames'
import { ReactNode } from 'react'
import { calcRem } from '../../utils/styles'

// TODO: Process all the images through TinyPNG
const BG_HEADER_MOBILE = '/background/bg_header_mobile@2x.jpg'
const BG_HEADER_DESKTOP = '/background/bg_header@2x.jpg'
const BG_HEADER_MOBILE_HEIGHT = 1580 // Actual height: 1462
const BG_HEADER_DESKTOP_HEIGHT = 821 // Actual height: 1642

const BG_PFX_OBJECTIVES = '/background/pfx_objectives_logo@2x.png'
const BG_PFX_OBJECTIVES_DESKTOP_HEIGHT = 1100 // Actual height: 1930

const BG_FOOTER_MOBILE = '/background/footer_bg_mobile@2x.png'
const BG_FOOTER_DESKTOP = '/background/footer_bg@2x.png'
const BG_FOOTER_DESKTOP_WIDTH = 1440 // Actual width: 2880
const BG_FOOTER_DESKTOP_HEIGHT = 852 // Actual height: 1700

const FOX_FOOTER_MOBILE = '/background/mobile_fox@2x.jpg'
const FOX_FOOTER_DESKTOP = '/background/fox_footer@2x.jpg'

interface WithBackGroundImageProps {
  children: ReactNode
  className?: string
}

export function WithBackgroundHeader({
  children,
  className
}: WithBackGroundImageProps) {
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
          background-image: url('${BG_HEADER_MOBILE}')};
          background-size: 100% ${calcRem(BG_HEADER_MOBILE_HEIGHT / 2)};
        }
        
        @media (min-width: 640px) {
          .background {
            background-image: url('${BG_HEADER_DESKTOP}')};
            background-size: 100% ${calcRem(BG_HEADER_DESKTOP_HEIGHT)};
          }
        }
      `}</style>
    </div>
  )
}

export function WithBackgroundPfxObjectives({
  children,
  className
}: WithBackGroundImageProps) {
  return (
    <div
      className={classNames(
        'background bg-no-repeat flex flex-col tablet:items-center w-full bg-stretch desktop:px-4',
        className
      )}
    >
      {children}
      <style jsx>{`
        @media (min-width: 1280px) {
          .background {
            background-image: url('${BG_PFX_OBJECTIVES}')};
            background-size: 100% ${calcRem(BG_PFX_OBJECTIVES_DESKTOP_HEIGHT)};
          }
        }
      `}</style>
    </div>
  )
}

export function WithBackgroundRoadmap({
  children,
  className
}: WithBackGroundImageProps) {
  return (
    <div
      className={classNames(
        'background bg-white bg-no-repeat flex flex-col tablet:items-center w-full bg-stretch desktop:px-4',
        className
      )}
    >
      {children}
      <style jsx>{`
        .background {
          background-size: 100%;
        }
      `}</style>
    </div>
  )
}

export function WithBackgroundFooter({
  children,
  className
}: WithBackGroundImageProps) {
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
          background-image: url('${BG_FOOTER_MOBILE}')};
          background-size: 100% 60vw;
        }
        
        @media (min-width: 640px) {
          .background {
            background-image: url('${BG_FOOTER_DESKTOP}')};
          }
        }

        @media (min-width: ${calcRem(BG_FOOTER_DESKTOP_WIDTH)}) {
          .background {
            background-size: 100% ${calcRem(BG_FOOTER_DESKTOP_HEIGHT)};
          }
        }
      `}</style>
    </div>
  )
}

export function WithBackgroundFox({
  children,
  className
}: WithBackGroundImageProps) {
  return (
    <div
      className={classNames(
        'background bg-no-repeat flex flex-col w-full bg-100% tablet:bg-cover tablet:items-center desktop:px-4 mt-10',
        className
      )}
    >
      {children}
      <style jsx>{`
        .background {
          background-image: url('${FOX_FOOTER_MOBILE}')};
          background-position: center bottom -40vw;
          min-height: ${calcRem(650)};
        }
        
        @media (min-width: 640px) {
          .background {
            background-image: url('${FOX_FOOTER_DESKTOP}')};
            background-position: center bottom;
          }
        }

        @media (min-width: 1440px) {
          .background {
            min-height: 45vw;
          }
        }
      `}</style>
    </div>
  )
}
