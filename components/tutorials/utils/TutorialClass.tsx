import { TutorialTypes } from './TutorialTypesEnum'

export class TutorialClass {
  slug: string;
  type: TutorialTypes;
  name: string;
  tileImage: string;
  image: string;
  isVideo: boolean;
  readingTime: number;
  creationDate: Date;
  creator: string;

  constructor(){

    this.slug = "";
    this.type = TutorialTypes.AKITA_NETWORK;
    this.name = "";
    this.tileImage = "";
    this.image = "";
    this.isVideo = false;
    this.readingTime = 12;
    this.creationDate = new Date();
    this.creator = "Admin";
    
  }
}
