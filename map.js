let wtopo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

let wphys = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: US National Park Service',
  maxZoom: 8
});

let map = L.map('map', {
  layers: [wphys, wtopo]
});

// $.getJSON("assets/SlaveRevolts.geojson", function(data){
  
//   let fourLayer = L.geoJson(data, {

//   filter: function(feature, layer) {
//     return (feature.properties["Century"] === "1400");},

//   pointToLayer: function(feature, latlng) {
//       return new L.CircleMarker(latlng, {
//         radius:8,
//         color: getColor(feature),
//       });
//     },
//     onEachFeature: PointActions
    
//   });

//    fourLayer.addTo(map);

// });

// map.setView([16.23866202852162, -2.362826680216191], 3);

let baseMaps = {
    "Physical": wphys,
    "Boundaries/Places": wtopo
};

// let overlayMaps = {
//     "1400s": fourLayer,
//     "1500s": fiveLayer,
//     "1600s": sixLayer,
//     "1700s": sevenLayer,
//     "1800s": eightLayer,
//     "1900+": nineLayer
// };

let layerControl = L.control.layers(baseMaps).addTo(map);
