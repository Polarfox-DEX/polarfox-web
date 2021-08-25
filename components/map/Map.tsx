import Helmet from "react-helmet";

export default function Map(){

    return(

        <div>
            <Helmet>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
                <link rel="stylesheet" href="map/map.css" />
                <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
                <script src="map/mapJS.js"></script>

                <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css" />
                <script src="https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"></script>
            </Helmet>
            

            <div id="mapid" style={{ height: '500px', width: '800px' }} ></div>
        </div>
        
    )

}