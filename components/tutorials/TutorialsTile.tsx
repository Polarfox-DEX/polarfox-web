import { TutorialInterface } from './utils/TutorialInterface'
import { calcRem } from '../../utils/styles'

export function TutorialsTile(props: { tutorial: TutorialInterface }) {
  return (
    <a
      className="pt-4 pr-4 pb-4 tile tutorial-tile"
      style={{
        fontSize: calcRem(16),
        fontWeight: 'bolder'
      }}
      href={'tutorial/' + props.tutorial.slug}
    >
      <div>
        <div
          style={{
            position: 'relative',
            backgroundImage: 'url(tutorials/' + props.tutorial.tileImage + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: 280,
            height: 170
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
