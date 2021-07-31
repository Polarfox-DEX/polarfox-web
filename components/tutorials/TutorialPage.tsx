import { calcRem } from '../../utils/styles'
import { TutorialInterface } from './utils/TutorialInterface'
import { tutorials } from './utils/TutorialExemple'
import React from 'react'
import { TutorialTypes } from './utils/TutorialTypesEnum'

export class TutorialPage extends React.Component<
  { slug: String },
  { tutorial: TutorialInterface }
> {
  constructor(props: { slug: string }, state: any) {
    super(props)

    this.state = {
      tutorial: {
        slug: '',
        type: TutorialTypes.BASICS,
        tileImage: '',
        image: '',
        name: '',
        isVideo: false
      }
    }
  }

  componentDidMount() {
    const tuto = tutorials.find((t) => {
      return t.slug === this.props.slug
    })

    if (tuto != undefined) {
      this.setState({
        tutorial: tuto
      })
    }
  }

  render() {
    console.log(this.state.tutorial)

    if (this.state.tutorial != undefined) {
      return (
        <div className="container mt-32">
          <header className="container">
            <div
              className="opacity-50"
              style={{
                fontSize: calcRem(12),
                lineHeight: calcRem(14.1),
                letterSpacing: calcRem(3)
              }}
            >
              TUTORIAL
            </div>

            <div
              className="font-switzer font-semibold mt-1"
              style={{
                fontSize: calcRem(50),
                lineHeight: calcRem(65)
              }}
            >
              {this.state.tutorial.name}
            </div>
          </header>
        </div>
      )
    } else {
      return <div>Tutorial not found !</div>
    }
  }
}
