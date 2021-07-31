import { TutorialTypes } from './TutorialTypesEnum'

export interface TutorialInterface {
  slug: string
  type: TutorialTypes
  name: string
  tileImage: string
  image: string
  isVideo: boolean
}
