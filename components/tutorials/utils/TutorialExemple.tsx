import { TutorialTypes } from './TutorialTypesEnum'
import { TutorialInterface } from './TutorialInterface'

export let tutorials: TutorialInterface[] = [
  {
    slug: 'article-1',
    type: TutorialTypes.BASICS,
    tileImage: 'image1.jpg',
    image: '',
    name: 'Article #1',
    isVideo: true
  },
  {
    slug: 'article-2',
    type: TutorialTypes.BASICS,
    tileImage: 'image2.jpg',
    image: '',
    name: 'Article #2',
    isVideo: false
  },
  {
    slug: 'article-3',
    type: TutorialTypes.BASICS,
    tileImage: 'image3.jpg',
    image: '',
    name: 'Article #3',
    isVideo: true
  },
  {
    slug: 'article-4',
    type: TutorialTypes.BASICS,
    tileImage: 'image4.jpg',
    image: '',
    name: 'Article #4',
    isVideo: false
  },

  {
    slug: 'article-5',
    type: TutorialTypes.AKITA_NETWORK,
    tileImage: 'image5.jpg',
    image: '',
    name: "Article #5",
    isVideo: false
  },
  {
    slug: 'article-6',
    type: TutorialTypes.AKITA_NETWORK,
    tileImage: 'image6.jpg',
    image: '',
    name: "Article #6",
    isVideo: true
  },

  {
    slug: 'article-7',
    type: TutorialTypes.PFX_DEV,
    tileImage: 'image7.jpg',
    image: '',
    name: 'Article #7',
    isVideo: false
  },
  {
    slug: 'article-8',
    type: TutorialTypes.PFX_DEV,
    tileImage: 'image8.jpg',
    image: '',
    name: "Article #8",
    isVideo: true
  }
]
