/* Create map and initialize tileLayer */

L.mapbox.accessToken = 'pk.eyJ1IjoiamJyaWNoZXoiLCJhIjoiY2tzaXpsaXE4MXJlYzJ2bnVkZ2FuZ29zMCJ9.nq-rpN9x9ukzySBnjp5omA'

var map = L.map('mapid').setView([10,10], 2);

var southWest = L.latLng(-89.98155760646617, -180),
northEast = L.latLng(89.99346179538875, 180);
var bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
    attribution: '',
    maxZoom: 10,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

L.mapbox.styleLayer('mapbox://styles/jbrichez/cksrhryyo14ad17o1vbaws651').addTo(map)

/* create teams sorted by continent */
var jobsAvailable = {
    lead_dev: {color: "#0130A6", jobName: "Lead Developer" },
    dev: {color: "#1B4ECE", jobName: "Developer"},
    marketer: {color: "#F3A837", jobName: "Marketer"},
    ceo: {color: "#FD7A01", jobName: "CEO"},
    supervisor: {color: "#A90000", jobName: "Supervisor"},
    designer: {color: "#2DBCC4", jobName: "Designer"},
    artist: {color: "#7A13E1", jobName: "Artist"}
}

var countryFlag = {
    france: "france.svg",
    usa: "usa.svg",
    germany: "germany.svg",
    czech: "czech.svg",
    japan: "japan.svg",
    switzerland: "switzerland.svg",
    slovakia: "slovakia.svg",
    latvia: "latvia.svg",
    spain: "spain.svg"
}

var AsianMembers = [
    {name: "Akita Inu", job: jobsAvailable.supervisor, position: [39.671658, 140.075525], country: countryFlag.japan}
]

var EuTeamMembers = [
    {name: "Clément AGUILAR", job: jobsAvailable.lead_dev, position: [50.070979, 14.420962], country: countryFlag.czech},
    {name: "Jean-Benoît RICHEZ", job: jobsAvailable.dev, position: [48.859750, 2.336215], country: countryFlag.france},
    {name: "Bastian Gerheim", job: jobsAvailable.marketer, position: [50.732344, 7.103525], country: countryFlag.germany},
    {name: "Nicolas Hebrard", job: jobsAvailable.dev, position: [46.519992, 6.626803], country: countryFlag.switzerland},
    {name: "Vladimír Krajčovič", job: jobsAvailable.designer, position: [48.151554, 17.109229], country: countryFlag.slovakia},
    {name: "Art_turn",  job: jobsAvailable.artist, position: [56.941713, 24.088415], country: countryFlag.latvia},
    {name: "Yoam", job: jobsAvailable.artist, position: [40.411135, -3.690522], country: countryFlag.spain}
]

var NorthAmericaTeamMembers = [ 
    {name: "Justin French", job: jobsAvailable.ceo, position: [33.705052, -78.868887], country: countryFlag.usa},
    {name: "Geena Scalzo", job: jobsAvailable.marketer, position: [33.705052, -78.868887], country: countryFlag.usa},
    {name: "John Hua", job: jobsAvailable.marketer, position: [34.012309, -118.499984], country: countryFlag.usa},
    {name: "Ryan MacGavin", job: jobsAvailable.marketer, position: [40.778693, -73.967968], country: countryFlag.usa},
    {name: "Tony Try", job: jobsAvailable.marketer, position: [34.007528, -118.499845], country: countryFlag.usa},
    {name: "Baphnedia", job: jobsAvailable.artist, position: [38.889779, -77.012997], country: countryFlag.usa},
    {name: "Lulu Wu", job: jobsAvailable.artist, position: [33.978887, -118.450170], country: countryFlag.usa},
    {name: "John Silva", job: jobsAvailable.artist, position: [33.976776, -118.470830], country: countryFlag.usa}
]


var clusterGroupCss = 'cluster rounded-full'
var popupCss = 'popup'

/* Put markers on map */

//EU members
var UEmarkers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
        return L.divIcon({ html: getClusterGroupHTML(cluster,"Europe"), className:  clusterGroupCss});
    }
});
EuTeamMembers.forEach(member => {

    UEmarkers.addLayer(createMarker(member))

})
map.addLayer(UEmarkers)

//North american members
var NAmarkers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
        return L.divIcon({ html: getClusterGroupHTML(cluster,"North America"), className: clusterGroupCss });
    }
});
NorthAmericaTeamMembers.forEach(member => {

    NAmarkers.addLayer(createMarker(member))

})
map.addLayer(NAmarkers)

//Asian members
var Asianmarkers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
        return L.divIcon({ html: getClusterGroupHTML(cluster,"Asia"), className:  clusterGroupCss});
    }
});
AsianMembers.forEach(member => {

    Asianmarkers.addLayer(createMarker(member))

})
map.addLayer(Asianmarkers)

function getClusterGroupHTML(cluster){

    var html = 
        `<div style="width:40px; height:40px"> 
            ${cluster.getChildCount()}
        </div>`;

    return html

}

function createMarker(member){

    var marker = L.marker(member.position, { icon: getMarker(member) });
    marker.bindPopup(getPopup(member), {className: popupCss, maxWidth: "auto", closeButton: false});

    return marker;

}

function getPopup(member){

    var html = 
        `<div style="width: 9rem;"> 
            <div class="flex font-bold items-center" style="margin: 0.3rem 0"> 
                <div style="white-space: nowrap">${member.name}</div>
                <img style="margin-left: auto" src="/map/flags/${member.country}" />
            </div>
            <div class="my-2" style="height:2px; background-color:#E5E8EB"></div>
            <div class="font-bold" style="margin: 0.3rem 0">${member.job.jobName}</div>
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