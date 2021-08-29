import { TutorialClass } from './utils/TutorialClass'
import { calcRem } from '../../utils/styles'

export function TutorialsTile(props: { tutorial: TutorialClass }) {
  return (
    <a
      className="py-4 tile hover:opacity-50 font-bold odd:mr-0"
      style={{
        fontSize: calcRem(16)
      }}
      href={'tutorials/' + props.tutorial.slug}
    >
      <div
        className="bg-center bg-cover flex justify-center w-full"
        style={{
          backgroundImage: `url('tutorials/${props.tutorial.tileImage}')`,
          height: calcRem(190)
        }}
      >
        {props.tutorial.isVideo && (
          <img className="place-self-center" src="tutorials/play-video.png" alt="play video" />
        )}
      </div>

      <h3 className="mt-4 font-bold">{props.tutorial.name}</h3>
    </a>
  )
}
