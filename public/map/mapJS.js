/* Create map and initialize tileLayer */
var map = L.map('mapid').setView([10,10], 2);

var southWest = L.latLng(-89.98155760646617, -180),
northEast = L.latLng(89.99346179538875, 180);
var bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamJyaWNoZXoiLCJhIjoiY2tzaXpsaXE4MXJlYzJ2bnVkZ2FuZ29zMCJ9.nq-rpN9x9ukzySBnjp5omA'
}).addTo(map);

/* create teams sorted by continent */
var jobsAvailable = [
    {color: "#0130A6", jobName: "Lead Developer" },
    {color: "#1B4ECE", jobName: "Developer"},
    {color: "#F3A837", jobName: "Marketer"},
    {color: "#FD7A01", jobName: "CEO"},
]

var countryFlag = [
    "",
    ""
]

var EuTeamMembers = [
    {name: "Clément AGUILAR", job: jobsAvailable[0], position: [50.070979, 14.420962], country: "Czech"},
    {name: "Jean-Benoît RICHEZ", job: jobsAvailable[1], position: [48.859750, 2.336215], country: "French"},
    {name: "Bastian Gerheim", job: jobsAvailable[2], position: [50.732344, 7.103525], country: "Germany"},
]

var NorthAmericaTeamMembers = [
        
    {name: "Justin French", job: jobsAvailable[3], position: [33.705052, -78.868887], country: countryFlag[0]},
    {name: "Geena Scalzo", job: jobsAvailable[2], position: [33.705052, -78.868887], country: countryFlag[0]},
    {name: "John Hua", job: jobsAvailable[2], position: [34.012309, -118.499984], country: countryFlag[0]},
    {name: "Ryan MacGavin", job: jobsAvailable[2], position: [40.778693, -73.967968], country: countryFlag[0]},
    {name: "Tony Try", job: jobsAvailable[2], position: [34.007528, -118.499845], country: countryFlag[0]},
]

var clusterGroupCss = 'cluster rounded-full'

/* Put markers on map */
var UEmarkers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
        return L.divIcon({ html: getClusterGroupHTML(cluster,"Europe"), className:  clusterGroupCss});
    }
});
EuTeamMembers.forEach(member => {

    UEmarkers.addLayer(createMarker(member))

})
map.addLayer(UEmarkers)

var NAmarkers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
        return L.divIcon({ html: getClusterGroupHTML(cluster,"North America"), className: clusterGroupCss });
    }
});
NorthAmericaTeamMembers.forEach(member => {

    NAmarkers.addLayer(createMarker(member))

})
map.addLayer(NAmarkers)


function getClusterGroupHTML(cluster,continent){

    var html = 
        `<div style="width:40px; height:40px"> 
            ${cluster.getChildCount()}
        </div>`;

    return html

}

function createMarker(member){

    var marker = L.marker(member.position, { icon: getMarker(member) });
    marker.bindPopup(getPopup(member));

    return marker;

}

function getPopup(member){

    var html = 
        `<div className="pr-2"> 
            <div className="flex font-bold items-center"> 
                <span className="mr-4">${member.name}</span> ${member.country}
            </div>
            <div className="my-2" style="height:3px; background-color:#E5E8EB"></div>
            <div className="font-bold">${member.job.jobName}</div>
        </div>`;

    return html;

}

function getMarker(member){

    const html = `<div style='background-color:${member.job.color}; width: 10px; height: 10px; border-radius: 10px;'></div>`

    const icon = L.divIcon({
        html: html,
        className: '',
    });

    return icon
}