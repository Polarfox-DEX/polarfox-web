import classNames from 'classnames'
import { ReactNode } from 'react'

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

export function WithBackgroundImageNew({
  imageUrl,
  children,
  className
}: WithBackGroundImageProps) {
  return (
    <div
      className={classNames(
        'bg-no-repeat flex flex-col tablet:items-center w-full',
        className
      )}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {children}
    </div>
  )
}
