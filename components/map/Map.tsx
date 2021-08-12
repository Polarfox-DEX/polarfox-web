import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import * as L from 'leaflet'

import memberJobs from "./MemberJobs"
import { TeamMemberInterface } from "./TeamMemberInterface"
import MapMarker from "./MapMarker"
import FrenchFlag from "../svg/flags/FrenchFlag"
import CzechRepublic from "../svg/flags/CzechRepublic"
import GermanFlag from "../svg/flags/GermanFlag"
import USFlag from "../svg/flags/USFlag"
import { LeafletContext } from "@react-leaflet/core";

export default function Map(){

    let EuropeeanMembers : TeamMemberInterface[] = [
        {name: "Clément AGUILAR", job: memberJobs[0], position: [50.070979, 14.420962], country: <CzechRepublic/>},
        {name: "Jean-Benoît RICHEZ", job: memberJobs[1], position: [48.859750, 2.336215], country: <FrenchFlag/>},
        {name: "Bastian Gerheim", job: memberJobs[2], position: [50.732344, 7.103525], country: <GermanFlag/>},
    ]
    
    let NorthAmericaMembers: TeamMemberInterface[] = [
        
        {name: "Justin French", job: memberJobs[3], position: [33.705052, -78.868887], country: <USFlag/>},
        {name: "Geena Scalzo", job: memberJobs[2], position: [33.706396, -78.867102], country: <USFlag/>},
        {name: "John Hua", job: memberJobs[2], position: [50.732344, 7.103525], country: <USFlag/>},
        {name: "Ryan MacGavin", job: memberJobs[2], position: [50.732344, 7.103525], country: <USFlag/>},
        {name: "Tony Try", job: memberJobs[2], position: [50.732344, 7.103525], country: <USFlag/>},
    ]

    const createClusterCustomIcon = function (array: TeamMemberInterface[]) {
        return L.divIcon({
          html: `<span>${array.length}</span>`,
          className: 'marker-cluster-custom',
          iconSize: L.point(40, 40, true),
        });
      }

    return(
        <div>
            <MapContainer 
                style={{ height: '500px', width: '800px' }} 
                center={[0,0]} 
                zoom={1}
                crollWheelZoom={true}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon(EuropeeanMembers)}>
                    {EuropeeanMembers.map((member) => {
                        return(
                            <MapMarker member={member}></MapMarker>
                        )
                    })}
                </MarkerClusterGroup>

                <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon(NorthAmericaMembers)}>
                    {NorthAmericaMembers.map((member) => {
                        return(
                            <MapMarker member={member}></MapMarker>
                        )
                    })}
                </MarkerClusterGroup>

            </MapContainer>
        </div>
        
    )

}