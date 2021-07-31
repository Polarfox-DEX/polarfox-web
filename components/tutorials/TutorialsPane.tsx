import { calcRem } from '../../utils/styles'
import { TutorialsTile } from './TutorialsTile'
import { Tutorial } from './utils/TutorialInterface'
import { TutorialTypes } from './utils/TutorialTypesEnum'
import { tutorials } from './utils/TutorialExemple'

export function TutorialsPane() {

    return(

        <div>

            <div>
                <div 
                className="mt-10 border-b-4 border-tutorials_tile pb-8"
                style={{
                    fontSize: 12,
                    fontWeight: 'bold'
                }}
                >
                    BASICS
                </div>

                <div className="grid grid-cols-4 mb-4">

                    {
                        tutorials.map(tuto => {
                            if(tuto.type == TutorialTypes.BASICS) return <TutorialsTile tutorial={tuto}/>
                        })
                    }

                </div>
            </div>
            

            <div className="grid grid-cols-2">

                <div>

                    <div 
                    className="mt-10 mr-10 border-b-4 border-tutorials_tile pb-8"
                    style={{
                        fontSize: 12,
                        fontWeight: 'bold'
                    }}>
                    AKITA NETWORK
                    </div>

                    <div className="grid grid-cols-2 mb-4">

                    {
                        tutorials.map(tuto => {

                            if(tuto.type == TutorialTypes.AKITA_NETWORK) return <TutorialsTile tutorial={tuto}/>
                            
                        })
                    }

                </div>

                </div>
                
                <div>

                    <div 
                    className="mt-10 border-b-4 border-tutorials_tile pb-8"
                    style={{
                        fontSize: 12,
                        fontWeight: 'bold'
                    }}>
                    PFX DEV
                    </div>

                    <div className="grid grid-cols-2 mb-4">

                    {
                        tutorials.map(tuto => {
                            if(tuto.type == TutorialTypes.PFX_DEV) return <TutorialsTile tutorial={tuto}/>
                        })
                    }

                    </div>

                </div>
                
            </div>
            

        </div>

    )

}