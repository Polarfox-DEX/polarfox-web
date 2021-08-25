import Helmet from "react-helmet";

export default function Map(){

    return(

        <div>
            <Helmet>
                <link rel="stylesheet" href="map/map.css" />
                <script src="map/mapJS.js"></script>

                <script src='https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.js'></script>
                <link href='https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.css' rel='stylesheet' />

                <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css" />
                <script src="https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"></script>
            </Helmet>
            

            <div id="mapid" style={{ height: '500px', width: '800px' }} ></div>
        </div>
        
    )

}