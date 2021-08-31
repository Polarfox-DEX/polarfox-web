import { TutorialTypes } from './TutorialTypesEnum'
import { TutorialClass } from './TutorialClass'

export let tutorials: TutorialClass[] = [
  {
    slug: 'article-1',
    type: TutorialTypes.BASICS,
    tileImage: 'image1.jpg',
    image: 'tutorial-image.png',
    name: 'Article #1',
    readingTime: 12,
    isVideo: true,
    creationDate: new Date(),
    creator: 'Admin',
    content: 'This is page content'
  },
  {
    slug: 'article-2',
    type: TutorialTypes.BASICS,
    tileImage: 'image2.jpg',
    image: '',
    name: 'Article #2',
    readingTime: 12,
    isVideo: false,
    creationDate: new Date(),
    creator: 'Admin',
    content: 'This is page content'
  },
  {
    slug: 'article-3',
    type: TutorialTypes.BASICS,
    tileImage: 'image3.jpg',
    image: '',
    name: 'Article #3',
    readingTime: 12,
    isVideo: true,
    creationDate: new Date(),
    creator: 'Admin',
    content: 'This is page content'
  },
  {
    slug: 'article-4',
    type: TutorialTypes.BASICS,
    tileImage: 'image4.jpg',
    image: '',
    name: 'Article #4',
    readingTime: 12,
    isVideo: true,
    creationDate: new Date(),
    creator: 'Admin',
    content: 'This is page content'
  },
  {
    slug: 'article-5',
    type: TutorialTypes.AKITA_NETWORK,
    tileImage: 'image5.jpg',
    image: '',
    name: 'Article #5',
    readingTime: 12,
    isVideo: true,
    creationDate: new Date(),
    creator: 'Admin',
    content: 'This is page content'
  },
  {
    slug: 'article-6',
    type: TutorialTypes.AKITA_NETWORK,
    tileImage: 'image6.jpg',
    image: '',
    name: 'Article #6',
    readingTime: 12,
    isVideo: true,
    creationDate: new Date(),
    creator: 'Admin',
    content: 'This is page content'
  },

  {
    slug: 'article-7',
    type: TutorialTypes.PFX_DEV,
    tileImage: 'image7.jpg',
    image: '',
    name: 'Article #7',
    readingTime: 12,
    isVideo: true,
    creationDate: new Date(),
    creator: 'Admin',
    content: 'This is page content'
  },
  {
    slug: 'article-8',
    type: TutorialTypes.PFX_DEV,
    tileImage: 'image8.jpg',
    image: '',
    name: 'Article #8',
    readingTime: 12,
    isVideo: true,
    creationDate: new Date(),
    creator: 'Admin',
    content: 'This is page content'
  }
]
