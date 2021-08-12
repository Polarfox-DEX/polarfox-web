import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { TeamMemberInterface } from "./TeamMemberInterface";
import * as L from 'leaflet'
import { calcRem } from "../../utils/styles";

interface MapMarkerProps{
    member: TeamMemberInterface
}

export default function MapMarker({member}: MapMarkerProps){

    const html = `<div style='background-color:${member.job.color}; width: 10px; height: 10px; border-radius: 10px;'></div>`

    const icon = L.divIcon({
        html: html,
        className: '',
    });

    return(
        <Marker position={member.position} icon={icon}>
            <Popup>
                <div className="pr-2"> 
                    <div className="flex font-bold items-center"> 
                        <span className="mr-4">{member.name}</span> {member.country}
                    </div>
                    <div className="my-2" style={{ height: calcRem(2), backgroundColor: "#E5E8EB" }}></div>
                    <div className="font-bold">{member.job.jobName}</div>
                </div>
            </Popup>
        </Marker>
    )


}