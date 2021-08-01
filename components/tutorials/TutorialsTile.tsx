import { TutorialClass } from './utils/TutorialClass'
import { calcRem } from '../../utils/styles'

export function TutorialsTile(props: { tutorial: TutorialClass }) {
  return (
    <a
      className="py-4 tile hover:opacity-50"
      style={{
        fontSize: calcRem(16),
        fontWeight: 'bolder'
      }}
      href={'tutorials/' + props.tutorial.slug}
    >
      <div>
        <div
        className="relative bg-center bg-cover"
          style={{
            backgroundImage: 'url(tutorials/' + props.tutorial.tileImage + ')',
            width: calcRem(280),
            height: calcRem(170)
          }}
        >
          {props.tutorial.isVideo && (
            <img
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',

                display: 'block',
                margin: 'auto'
              }}
              src="tutorials/play-video.png"
              alt="play video"
            />
          )}
        </div>
      </div>

      <h3 className="mt-4 font-bold">{props.tutorial.name}</h3>
    </a>
  )
}
