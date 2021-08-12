import Loadable from 'react-loadable'

export default function HomeMap(){

    const LoadableSearchResultMap = Loadable({ 
        loader: () => import('./../components/map/Map') as Promise<any>, loading() { return <div>Loading...</div> } 
    });

    return(
        <LoadableSearchResultMap />
    )

}