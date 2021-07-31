import { TutorialTypes } from './TutorialTypesEnum'
import { TutorialInterface } from './TutorialInterface'

export let tutorials: TutorialInterface[] = [
  {
    slug: 'we-may-loose-countries',
    type: TutorialTypes.BASICS,
    tileImage: 'image1.png',
    image: '',
    name: '"We may lose countries entirely" says Ireland\'s former President',
    isVideo: true
  },
  {
    slug: 'mission-1-5-inovating-for-climate-change',
    type: TutorialTypes.BASICS,
    tileImage: 'image2.png',
    image: '',
    name: 'Mission 1.5: Innovating for Climate Change',
    isVideo: false
  },
  {
    slug: 'the-threat-of-becoming-climate-refugees',
    type: TutorialTypes.BASICS,
    tileImage: 'image3.png',
    image: '',
    name: 'The threat of becoming climate refugees | Bryant Zebedy',
    isVideo: true
  },
  {
    slug: 'climate-sustainability-what-we-can-do-now',
    type: TutorialTypes.BASICS,
    tileImage: 'image4.png',
    image: '',
    name: 'Climate & Sustainability: What we can do now',
    isVideo: true
  },

  {
    slug: 'metoo-isn-t-about-sex-it-s-about-power',
    type: TutorialTypes.AKITA_NETWORK,
    tileImage: 'image5.png',
    image: '',
    name: "#MeToo isn't about sex, it's about power",
    isVideo: true
  },
  {
    slug: 'amanda-nguyen-unanimously-passed-the-sexual-assault',
    type: TutorialTypes.AKITA_NETWORK,
    tileImage: 'image6.png',
    image: '',
    name: "Amanda Nguyen unanimously passed the Sexual Assault Survivors' Bill of rights",
    isVideo: true
  },

  {
    slug: 'how-to-shape-politics-through-technology',
    type: TutorialTypes.PFX_DEV,
    tileImage: 'image7.png',
    image: '',
    name: 'How to shape politics through technology | Dylan Kaplan',
    isVideo: true
  },
  {
    slug: 'twitter-s-founder-on-building-a-business-for-the-future',
    type: TutorialTypes.PFX_DEV,
    tileImage: 'image8.png',
    image: '',
    name: "Twitter's Founder on building a business for the future | Biz Stone",
    isVideo: true
  }
]
