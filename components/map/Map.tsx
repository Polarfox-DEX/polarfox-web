import { TeamMemberInterface } from "./TeamMemberInterface"
import CzechRepublic from "../svg/flags/CzechRepublic"
import FrenchFlag from "../svg/flags/FrenchFlag"
import GermanFlag from "../svg/flags/GermanFlag"
import USFlag from "../svg/flags/USFlag"
import memberJobs from "./MemberJobs"

import {Helmet} from "react-helmet";

export default function Map(){

    const createClusterCustomIcon = function (array: TeamMemberInterface[]) {
        return L.divIcon({
          html: `<span>${array.length}</span>`,
          className: 'marker-cluster-custom',
          iconSize: L.point(40, 40, true),
        });
      }

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